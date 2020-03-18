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

  async DeleteTodo(data:Todo): Promise<string>{
    console.log(data.completed)
    if (data.completed){
      return "Can't delete Completed Task"
    }else{
      return this.todoRepo.DeleteTodo(data);
    }
  }

  async CompleteTodo(data:Todo) {
    this.todoRepo.CompleteTodo(data);
  }
}
