import { Todo } from "../../domain/entities/Todo";
import { TodoRepository } from "../../domain/repositories/TodoRepository";
import { db } from "./firestore"

class TodoDTO {
  id: number = 0;
  text: string = "";
  completed: boolean = false;
}

// let todoArr = [{
//   "id": 1,
//   "text": "Kani na Todo",
//   "completed": false
// }, {
//   "id": 2,
//   "text": "Todo 2",
//   "completed": true
// }]
export default class TodoRepositoryFirebaseImpl implements TodoRepository {

  async GetTodo(): Promise<Todo[]> {
    let todoArr = []
    db.collection("Todo")
    .get()
    .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        todoArr = data
        console.log(data);

    });
    var jsonString = JSON.stringify(todoArr)
    var res = JSON.parse(jsonString)
    return res.map((todoItem: TodoDTO) => new Todo(todoItem.id, todoItem.text, todoItem.completed));
  }

  async AddTodo(data:Todo){
    // todoArr.push(data)
    // console.log(todoArr)

    db.collection("Todo").doc(data.id.toString()).set({
        text: data.text,
        completed: false,
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
  }

  async DeleteTodo(data:Todo) {
    // var intData = parseInt(data.id.toString())
    // for (let i = 0; i < todoArr.length; i++) {
    //   if (intData === todoArr[i].id){
    //     todoArr.splice(i,1);
    //     break;
    //   }
    // }
  }

  async CompleteTodo(data:Todo){
    // var intData = parseInt(data.toString())
    // for (let i = 0; i < todoArr.length; i++) {
    //   if (intData === todoArr[i].id){
    //     todoArr[i].completed = true
    //     break;
    //   }
    // }
  }
}
