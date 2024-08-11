"use server";
import { createRepo, TodoItem } from "@/lib/todo";

export async function addTodo(item: TodoItem) {
  let todoRepository = createRepo();
  await todoRepository.addTodo(item);
}

export async function deleteTodo(id: string) {
  let todoRepository = createRepo();
  await todoRepository.deleteTodo(id);
}
