import { Todo } from "../entities/Todo";
import { TodoRepository } from "../repositories/TodoRepository";

export interface TodoService {
  GetItems(): Promise<Todo[]>;
}

export default class ItemServiceImpl implements TodoService {
  itemRepo: TodoRepository;

  constructor(ir: TodoRepository) {
    this.itemRepo = ir;
  }

  async GetItems(): Promise<Todo[]> {
    return this.itemRepo.GetItems();
  }
}
