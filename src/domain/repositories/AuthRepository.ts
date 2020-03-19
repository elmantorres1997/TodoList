import { User } from "../entities/User";

export interface AuthRepository {
  Signup(data:User): void;
  Login(data:User): void;
  Logout(): void;
}