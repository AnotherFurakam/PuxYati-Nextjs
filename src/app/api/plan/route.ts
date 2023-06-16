import { ICreatePlan } from "@/interfaces/plan.interface"
import planService from "@/services/plan.service"
import { NextResponse } from "next/server"


export async function POST(request: Request) {
  try {
    const body: ICreatePlan = await request.json()

    if (!body.name || !body.price || !body.games || !body.month_duration || !body.additional_info) {
      return NextResponse.json(
        { message: 'Datos incompletos' },
        { status: 400 }
      )
    }

    const registeredPlan = await planService.addPlan(body)

    return NextResponse.json(registeredPlan, { status: 201 })

  } catch (error: any) {
    console.log(error, 'CREATE PLAN ERROR')
    return NextResponse.json({
      message: error.message
    }, {
      status: 500
    })
  }
}

export async function GET() {
  try {
    const planList = await planService.getPlan()

    return NextResponse.json(planList, { status: 200 })

  } catch (error: any) {
    console.log(error, 'CREATE PLAN ERROR')
    return NextResponse.json({
      message: error.message
    }, {
      status: 500
    })
  }
}