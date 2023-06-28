import { ICreateUserPlan } from "@/interfaces/user-plan.interface";
import { UserPlan } from "@prisma/client";

import prisma from '@/libs/prisma'

const addUserPlan = async (userPlan: ICreateUserPlan): Promise<UserPlan> => {

  try {
    const createdUserPlan = await prisma.userPlan.create({
      data: userPlan
    })

    return createdUserPlan

  } catch (error: any) {
    throw new Error(error.message)
  }
} 

const getGanancias = async () => {
  const ganancias = await prisma.userPlan.findMany({
    where: {
      expired_date: {
        gte: new Date()
      }
    },
    select: {
      plan: {
        select: {
          price: true
        }
      }
    }
  })
  let suma = 0
  ganancias.forEach(plan => {
    suma += plan.plan.price
  });
  return Math.round(suma)
}

const userPlanService = {
  addUserPlan,
  getGanancias
}

export default userPlanService