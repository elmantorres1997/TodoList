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

  async Login(userData:User){
    var logins = await firebaseApp.auth().signInWithEmailAndPassword(userData.username, userData.password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(errorCode + " " + errorMessage)
    });
    console.log(logins)
  }

  async Logout(){
    await firebaseApp.auth().signOut().then(function() {
      console.log('Success OUT')
    }).catch(function(error) {
      console.log(error)
    });
  }
}
