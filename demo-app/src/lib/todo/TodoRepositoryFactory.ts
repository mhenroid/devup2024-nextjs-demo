import TodoRepository from "./TodoRepository";
import TodoRepositoryCosmos from "./TodoRepositoryCosmos";
import TodoRepositoryMemory from "./TodoRepositoryMemory";

export function createRepo(type: string | null | void): TodoRepository {
  let repoType = type || (process.env.TODO_REPOSITORY_TYPE as string);
  if (repoType === "cosmos") {
    return new TodoRepositoryCosmos();
  } else if (repoType === "memory") {
    return new TodoRepositoryMemory();
  } else {
    return new TodoRepositoryMemory();
  }
}
