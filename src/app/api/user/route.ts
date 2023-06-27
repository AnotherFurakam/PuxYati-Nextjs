import userService from "@/services/user.service"
import { NextResponse } from "next/server"
import { format } from "date-fns";

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

export async function GET(request: Request) {
  try {
    const users = await userService.getUsers()

    const user = users[0]
    console.log(format(user.userPlan[0]?.expired_date, 'dd/MM/yyyy'))

    return NextResponse.json(users, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({
      message: error.message
    },{
      status: 500
    })
  }
}