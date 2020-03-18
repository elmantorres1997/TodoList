import { Todo } from "../entities/Todo";
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
    this.todoRepo.AddTodo(data);
  }

  async DeleteTodo(data:Todo){
    try{
      if (data.completed){
        throw "Can't Deleted Todo"
      }else{
        this.todoRepo.DeleteTodo(data);
      }
    }catch (error){
      alert(error)
    }
  }

  async CompleteTodo(data:Todo) {
    this.todoRepo.CompleteTodo(data);
  }
}
