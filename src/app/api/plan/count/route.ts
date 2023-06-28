import planService from "@/services/plan.service"
import { NextResponse } from "next/server"

export async function GET() {
  const planQuantity = await planService.countPlanes()
  return NextResponse.json({
    quantity: planQuantity
  },{
    status: 200
  })
}