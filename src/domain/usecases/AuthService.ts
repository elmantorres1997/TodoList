import { User } from "../entities/User";
import { AuthRepository } from "../repositories/AuthRepository";

export interface AuthService {
    SignupTodo(data:User): void;
    LoginTodo(data:User): void;
    LogoutTodo(): void;
}

export default class AuthServiceImpl implements AuthService {
  todoRepo: AuthRepository;

  constructor(ir: AuthRepository) {
    this.todoRepo = ir;
  }
  async SignupTodo(userData:User) {
    this.todoRepo.SignupTodo(userData);
  }

  async LoginTodo(userData:User) {
    this.todoRepo.LoginTodo(userData);
  }

  async LogoutTodo() {
    this.todoRepo.LogoutTodo();
  }
}
