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

const userPlanService = {
  addUserPlan
}

export default userPlanService