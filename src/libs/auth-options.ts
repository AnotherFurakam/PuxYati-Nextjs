import { AuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import prisma from "@/libs/prisma";
import { Admin, User } from "@prisma/client";

export const authOptions: AuthOptions = {
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Credenciales invalidos");
        }

        try {
          let user: User | null = null;

          if (credentials.email.split("@")[1] === "admin.com") {
            const admin = await prisma.admin.findFirst({
              where: {
                email: credentials.email,
              },
            });
            if (admin?.password === credentials.password) {
              return {
                id: admin.id,
                email: admin.email,
                name: "admin",
                lastname: "user",
              } as User;
            } else {
              throw new Error("Usuario o contraseña incorrecta");
            }
          } else {
            user = await prisma.user.findFirst({
              where: {
                email: credentials.email,
              },
            });
            if (user?.hashedPassword === credentials.password) {
              return user;
            } else {
              throw new Error("Usuario o contraseña incorrecta");
            }
          }
        } catch (error: any) {
          throw new Error(error.message);
        }
      },
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
    maxAge: 604800, // the session duration is seven days
  },
  secret: process.env.NEXTAUTH_SECRET,
};
