import { TodoItem } from "@/lib/todo";

export default function TodoList({
  todos,
  onDelete,
}: {
  todos: TodoItem[];
  onDelete: Function;
}) {
  let deleteTodo = (id: number) => {
    onDelete && onDelete(id);
  };

  return (
    <ul>
      {todos.map((todo: TodoItem, index: Number) => (
        <li key={index.toString()}>
          <div>
            <span>{todo.title} </span>
            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
