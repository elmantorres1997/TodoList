import { User } from "../entities/User";

export interface AuthRepository {
  SignupTodo(data:User): void;
  LoginTodo(data:User): void;
  LogoutTodo(): void;
}