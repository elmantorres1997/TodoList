import { User, currentUser } from "../entities/User";

export interface AuthRepository {
  Signup(data:User): void;
  Login(data:User): Promise<string> ;
  Logout(): void;
}