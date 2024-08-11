import { NextRequest, NextResponse } from "next/server";
import { createRepo } from "@/lib/todo";

export async function GET(request: NextRequest) {
  let todoRepository = createRepo();
  let todos = await todoRepository.getTodos();

  return NextResponse.json(todos);
}

export async function POST(request: NextRequest) {
  let todoRepository = createRepo();
  const data = await request.json();
  await todoRepository.addTodo(data);
  return NextResponse.json({ message: "created" }, { status: 201 });
}
