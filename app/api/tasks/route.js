import { NextResponse } from "next/server";
import connect from "@/db";
// import Task from "@/models/Task";

export const GET = async (request) => {
  try {
    await connect();
    return new NextResponse("hello ", { status: 200 });
  } catch (error) {
    return new NextResponse("error in fetchin tasks" + error, { status: 500 });
  }
};
