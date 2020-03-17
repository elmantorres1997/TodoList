import { Todo } from "../entities/Todo";

export interface TodoRepository {
  GetTodo(): Promise<Todo[]>;
}
