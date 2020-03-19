import { Todo , User } from "../entities/Todo";

export interface TodoRepository {
  GetTodo(): Promise<Todo[]>;
  AddTodo(data:Todo): void;
  DeleteTodo(data:Todo): void;
  CompleteTodo(data:Todo): void;
  SignupTodo(data:User): void;
  LoginTodo(data:User): void;
  LogoutTodo(): void;
}
