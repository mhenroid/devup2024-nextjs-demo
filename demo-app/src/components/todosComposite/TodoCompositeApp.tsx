import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoRefresh from "./TodoRefresh";

export default function TodoApp() {
  return (
    <div className="todoApp">
      <h1>Todo Composite App</h1>
      <TodoForm />
      <TodoRefresh />
      <TodoList />
    </div>
  );
}
