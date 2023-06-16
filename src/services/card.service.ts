import { ICreateCard } from '@/interfaces/card.interface'
import prisma from '@/libs/prisma'

const addCard = async (card: ICreateCard) => {
  try {

    const registeredCard = await prisma.card.create({
      data: card
    })

    return registeredCard

  } catch (error: any) {
    throw new Error(error.message)
  }
}

const cardService = {
  addCard
}

export default cardService