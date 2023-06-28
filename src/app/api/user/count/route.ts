import userService from "@/services/user.service";
import { NextResponse } from "next/server";

export async function GET() {
  const userQuantity = await userService.countUsers()
  return NextResponse.json({
    quantity: userQuantity
  },{
    status: 200
  })
}