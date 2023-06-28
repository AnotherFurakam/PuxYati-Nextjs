import { ICreateUser, IUserFull } from "@/interfaces/user.interface";
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

const getUsers = async() => {
  try {
    const users:IUserFull[] = await prisma.user.findMany({
      select: {
        id: true,
        createAt: true,
        name: true,
        lastname: true,
        email: true,
        userPlan: {
          where: {
            expired_date: {
              gte: new Date()
            }
          },
          select: {
            id: true,
            start_date: true,
            expired_date: true,
            plan: true
          }
        }
      }
    })
    return users
  } catch (error: any) {
    throw new Error(error.message)
  }
}  

const countUsers = async () => {
  const users = await prisma.user.count({})
  return users
}

const userService = {
  addUser,
  getUsers,
  countUsers
}

export default userService