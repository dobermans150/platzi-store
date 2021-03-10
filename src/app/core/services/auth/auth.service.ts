import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

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
}
