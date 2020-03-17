import { Todo } from "../entities/Todo";

export interface TodoRepository {
  GetItems(): Promise<Todo[]>;
}
