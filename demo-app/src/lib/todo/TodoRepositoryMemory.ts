import { TodoItem } from "./TodoItem";
import TodoRepository from "./TodoRepository";

declare global {
  var todos: TodoItem[];
}

if (!globalThis.todos) {
  globalThis.todos = [];
}

export default class TodoRepositoryMemory implements TodoRepository {
  constructor() {}

  async getTodos(): Promise<TodoItem[]> {
    return new Promise((resolve, reject) => {
      resolve(globalThis.todos);
    });
  }

  async addTodo(todoItem: TodoItem) {
    return new Promise<void>((resolve, reject) => {
      let id = crypto.randomUUID();
      globalThis.todos.push({ ...todoItem, id });
      resolve();
    });
  }

  async getTodo(id: String): Promise<TodoItem | null> {
    return new Promise<TodoItem | null>((resolve, reject) => {
      let item = globalThis.todos.find((o) => o.id == id);
      return item;
    });
  }

  async deleteTodo(id: string) {
    return new Promise<void>((resolve, reject) => {
      let index = globalThis.todos.findIndex((o) => o.id === id);
      if (index >= 0) {
        globalThis.todos.splice(index, 1);
      }
      resolve();
    });
  }
}
