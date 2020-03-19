import { User } from "../entities/User";
import { AuthRepository } from "../repositories/AuthRepository";

export interface AuthService {
    Signup(data:User): void;
    Login(data:User): void;
    Logout(): void;
}

export default class AuthServiceImpl implements AuthService {
  todoRepo: AuthRepository;

  constructor(ir: AuthRepository) {
    this.todoRepo = ir;
  }
  async Signup(userData:User) {
    this.todoRepo.Signup(userData);
  }

  async Login(userData:User) {
    this.todoRepo.Login(userData);
  }

  async Logout() {
    this.todoRepo.Logout();
  }
}
