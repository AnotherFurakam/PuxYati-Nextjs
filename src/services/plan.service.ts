import { ICreatePlan } from "@/interfaces/plan.interface";
import { Plan } from "@prisma/client";
import prisma from '@/libs/prisma'

const addPlan = async (plan: ICreatePlan): Promise<Plan> => {
  try {
    const createdPlan = await prisma.plan.create({
      data: plan
    })
    return createdPlan
  } catch (error: any) {
    throw new Error(error.message)
  }
}

const getPlan = async (): Promise<Plan[]> => {
  try {
    const planList: Plan[] = await prisma.plan.findMany({
      orderBy: {
        price: 'asc'
      }
    })
    if (planList.length > 0) return planList
    return []
  } catch (error: any) {
    throw new Error(error.message);
  }
}

const planService = {
  addPlan,
  getPlan
}

export default planService