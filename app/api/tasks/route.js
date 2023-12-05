import { NextResponse } from "next/server";
import connect from "@/db";
import Task from "@/models/Task";

export async function GET() {
  try {
    const tasks = await Task.find();

    return NextResponse.json({ tasks }, { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("error in fetchin tasks" + error, { status: 500 });
  }
}
export async function POST(req) {
  try {
    const body = await req.json();
    console.log(body);
    const taskData = body;
    console.log(taskData);
    await Task.create(taskData);

    return NextResponse.json({ message: "Task Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}