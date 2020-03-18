import { Todo } from "../../domain/entities/Todo";
import { TodoRepository } from "../../domain/repositories/TodoRepository";
import { db } from "./firestore"
import { database } from "firebase";

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
    let todoArr =[]
    let dataRef = db.collection("Todo")
    var activeRef = await dataRef.get()
    const data = activeRef.docs.map(doc=>doc.data())
    for (let i = 0; i < data.length; i++) {
        var jsonString = JSON.stringify(data[i])
        var res = JSON.parse(jsonString)
        todoArr.push(res)
    }
    return todoArr.map((todoItem: TodoDTO) => new Todo(todoItem.id, todoItem.text, todoItem.completed));
  }

  async AddTodo(data:Todo){
 
    db.collection("Todo").doc(data.id.toString()).set({
        id: data.id,
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
      let deleteDoc = await db.collection('Todo').doc(data.id.toString()).delete()
      .catch(function(error) {
        console.error("Error writing document: ", error);
    });
  }

  async CompleteTodo(data:Todo){
    let completeDoc = await db.collection("Todo").doc(data.toString()).update({
        completed: true
    });
  }
}
