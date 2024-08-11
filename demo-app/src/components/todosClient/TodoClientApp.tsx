"use client";

import { TodoItem } from "@/lib/todo";
import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodosClientApp() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    let url = "/api/todos";
    setIsLoading(true);
    fetch(url)
      .then((resp) => resp.json())
      .then((todos) => {
        setTodos(todos);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const addTodo = async (todoItem: TodoItem) => {
    if (todoItem) {
      let url = "/api/todos";
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(todoItem),
      });
      loadData();
    }
  };

  const deleteTodo = async (id: number) => {
    console.log("deleting item", id);
    if (id) {
      let url = `/api/todos/${id}`;
      let response = await fetch(url, {
        method: "DELETE",
      });
      loadData();
    }
  };

  return (
    <div className="todoApp">
      <h1>Todo Client App</h1>
      <TodoForm onAddTodo={addTodo} />
      <button onClick={loadData}>Refresh</button>
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}
