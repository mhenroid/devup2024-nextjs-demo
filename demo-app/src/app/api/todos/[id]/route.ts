import { NextRequest, NextResponse } from "next/server";
import { createRepo } from "@/lib/todo";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  let todoRepository = createRepo();
  let todo = await todoRepository.getTodo(context.params.id);
  if (todo) {
    return NextResponse.json(todo);
  }
  return NextResponse.json({ message: "no such item" }, { status: 404 });
}

export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  let todoRepository = createRepo();
  await todoRepository.deleteTodo(context.params.id);
  return NextResponse.json({ message: "deleted" }, { status: 200 });
}
