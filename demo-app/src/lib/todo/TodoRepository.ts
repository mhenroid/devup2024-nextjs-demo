import { TodoItem } from "./TodoItem";

export default interface TodoRepository {
  getTodos(): Promise<TodoItem[]>;
  addTodo(todoItem: TodoItem): Promise<void>;
  getTodo(id: String): Promise<TodoItem | null>;
  deleteTodo(id: string): Promise<void>;
}
