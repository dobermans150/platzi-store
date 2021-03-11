import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private angularFireAuth: AngularFireAuth) {}

  createUser(
    email: string,
    password: string
  ): Promise<firebase.default.auth.UserCredential> {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

  login(
    email: string,
    password: string
  ): Promise<firebase.default.auth.UserCredential> {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  logOut(): Promise<void> {
    return this.angularFireAuth.signOut();
  }

  hasUser() {
    return this.angularFireAuth.authState;
  }
}
