import { User } from "../../domain/entities/User";
import { AuthRepository } from "../../domain/repositories/AuthRepository";
import { firebaseApp } from "./firestore"

const db = firebaseApp.firestore();

export default class AuthRepositoryFirebaseImpl implements AuthRepository {

  async SignupTodo(userData:User) {
    await firebaseApp.auth().createUserWithEmailAndPassword(userData.username, userData.password).then(function() {
      console.log("Document successfully written!");
      }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + " " + errorMessage)
    });
  }

  async LoginTodo(userData:User){
    await firebaseApp.auth().signInWithEmailAndPassword(userData.username, userData.password).then(function() {
      console.log("Successfully Logged In!");
      }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(errorCode + " " + errorMessage)
    });
  }

  async LogoutTodo(){
    await firebaseApp.auth().signOut().then(function() {
      console.log('success')
    }).catch(function(error) {
      console.log(error)
    });
  }
}
