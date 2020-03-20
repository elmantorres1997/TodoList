import { User } from "../../domain/entities/User";
import { AuthRepository } from "../../domain/repositories/AuthRepository";
import { firebaseApp } from "./firestore"


export default class AuthRepositoryFirebaseImpl implements AuthRepository {

  async Signup(userData:User) {
    await firebaseApp.auth().createUserWithEmailAndPassword(userData.username, userData.password).then(function() {
      console.log("Document successfully written!");
      }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + " " + errorMessage)
    });
  }

  async Login(userData:User): Promise<string> {
    await firebaseApp.auth().signInWithEmailAndPassword(userData.username, userData.password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(errorCode + " " + errorMessage)
    });
    var user = firebaseApp.auth().currentUser;
    if (user) {
      return "LogedIn"
    } else {
      return "Not"
    }
  }

  async Logout(){
    await firebaseApp.auth().signOut().then(function() {
      console.log('Success OUT')
    }).catch(function(error) {
      console.log(error)
    });
  }
}
