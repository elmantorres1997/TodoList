import { Todo } from "../../domain/entities/Todo";
import { TodoRepository } from "../../domain/repositories/TodoRepository";

class TodoDTO {
  id: number = 0;
  text: string = "";
}

export default class TodoRepositoryImpl implements TodoRepository {
  
  todoArr = [{
    "id": 1,
    "text": "Kani na Todo"
  }, {
    "id": 2,
    "text": "Todo 2"
  }]

  async GetTodo(): Promise<Todo[]> {
    var jsonString = JSON.stringify(this.todoArr)
    var res = JSON.parse(jsonString)
    return res.map((todoItem: TodoDTO) => new Todo(todoItem.id, todoItem.text));
  }
}
