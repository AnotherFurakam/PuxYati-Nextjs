import cardService from "@/services/card.service";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const registeredCard = await cardService.addCard(body)

    return NextResponse.json(registeredCard, {status: 201})

  } catch (error: any) {
    return NextResponse.json({
      message: error.message
    },{
      status: 500
    })
  }
}