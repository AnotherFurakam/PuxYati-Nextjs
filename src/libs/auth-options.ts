
import { AuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import prisma from "@/libs/prisma"
import { User } from "@prisma/client";

export const authOptions: AuthOptions = {
  providers: [
    CredentialProvider({
      name: 'credentials',
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Credenciales invalidos')
        }

        try {

          const user:User | null = await prisma.user.findFirst({
            where: {
              email: credentials.email
            }
          })

          if (!user) throw new Error('Usuario o contraseña incorrecta')

          if (user.hashedPassword === credentials.password) {
            return user
          }else {
            throw new Error('Usuario o contraseña incorrecta')
          }

        } catch (error: any) {
          throw new Error(error.message)
        }

      }
    })
    // ...add more providers here
  ],
  callbacks: {
    async jwt({token, user}) {
      return {...token, ...user}
    },
    async session({session, token, user}) {
      session.user = token as any
      return session
    }
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: "jwt",
    maxAge: 604800 // the session duration is seven days
  },
  secret: "atr5-gt65-9jet"
}