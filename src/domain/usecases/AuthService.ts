import { User,currentUser } from "../entities/User";
import { AuthRepository } from "../repositories/AuthRepository";

export interface AuthService {
    Signup(data:User): void;
    Login(data:User): Promise<string> ;
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

  async Login(userData:User): Promise<string> {
    if (userData){
      return this.todoRepo.Login(userData);
    }else{
      throw "error"
    }
    
  }

  async Logout() {
    this.todoRepo.Logout();
  }
}
