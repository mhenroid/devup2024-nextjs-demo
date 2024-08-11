import { TodoItem } from "@/lib/todo";
import React, { useState } from "react";

export default function TodoForm({ onAddTodo }: { onAddTodo: Function }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!value) return;

    let todo: TodoItem = {
      title: value,
    };
    onAddTodo(todo);
    setValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
