import { ICreateUser } from "@/interfaces/user.interface";
import prisma from "@/libs/prisma";
import { User } from "@prisma/client";

const addUser = async (user: ICreateUser): Promise<User> => {
  try {
    const existEmail = await prisma.user.findFirst({
      where: {
        email: user.email
      }
    }) 
    if (existEmail) throw new Error(`El usuario con el email ${user.email} ya existe`) 
    const createdUser = await prisma.user.create({
      data: user
    })
    return createdUser
  } catch (error: any) {
    throw new Error(error.message)
  }
}

const userService = {
  addUser
}

export default userService