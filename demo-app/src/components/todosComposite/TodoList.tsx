import { TodoItem, createRepo } from "@/lib/todo";
import TodoDelete from "./TodoDelete";

export default async function TodoList() {
  let todoRepository = createRepo();
  let todos = await todoRepository.getTodos();

  return (
    <ul>
      {todos.map((todo: TodoItem, index: Number) => (
        <li key={index.toString()}>
          <div>
            <span>{todo.title} </span>
            <TodoDelete id={todo.id} />
          </div>
        </li>
      ))}
    </ul>
  );
}
