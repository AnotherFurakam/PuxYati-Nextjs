import userPlanService from "@/services/user-plan.service";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const createdUserPlan = await userPlanService.addUserPlan(body);

    return NextResponse.json(createdUserPlan, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const suma = await userPlanService.getGanancias();
  return NextResponse.json({ totalGanancias: suma }, { status: 200 });
}
