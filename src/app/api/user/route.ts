import userService from "@/services/user.service"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const registeredUser = await userService.addUser(body)

    return NextResponse.json(registeredUser, { status: 201 })

  } catch (error: any) {
    console.log(error, 'CREATE PLAN ERROR')
    return NextResponse.json({
      message: error.message
    }, {
      status: 500
    })
  }
}