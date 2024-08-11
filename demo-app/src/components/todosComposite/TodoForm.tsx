"use client";
import { TodoItem } from "@/lib/todo";
import React, { useState } from "react";
import { addTodo } from "@/app/serverActions";
import { useRouter } from "next/navigation";

export default function TodoForm() {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!value) return;

    let todo: TodoItem = {
      title: value,
    };

    addTodo(todo).then(() => {
      router.refresh();
    });
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}
