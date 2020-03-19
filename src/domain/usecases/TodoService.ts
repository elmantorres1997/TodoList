import { Todo , User } from "../entities/Todo";
import { TodoRepository } from "../repositories/TodoRepository";

export interface TodoService {
  GetTodo(): Promise<Todo[]>;
}

export default class ItemServiceImpl implements TodoService {
  todoRepo: TodoRepository;

  constructor(ir: TodoRepository) {
    this.todoRepo = ir;
  }

  async GetTodo(): Promise<Todo[]> {
    return this.todoRepo.GetTodo();
  }

  async AddTodo(data:Todo) {
    
    if (data.text.length === 0) {
      throw "Field can't be empty!"
    } 
    else if (data.text.length < 4){
      throw "Minimum of 4 characters!"
    }
    else {
      this.todoRepo.AddTodo(data);
    }
  }

  async DeleteTodo(data:Todo){

    if (data.completed){
      throw "Can't Deleted Todo"
    }else{
      this.todoRepo.DeleteTodo(data);
    }
  }

  async CompleteTodo(data:Todo) {
    this.todoRepo.CompleteTodo(data);
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
