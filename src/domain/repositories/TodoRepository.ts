  import { Todo } from "../entities/Todo";

  export interface TodoRepository {
    GetTodo(): Promise<Todo[]>;
    AddTodo(data:Todo): void;
    DeleteTodo(data:Todo): void;
    CompleteTodo(data:Todo): void;
  }
