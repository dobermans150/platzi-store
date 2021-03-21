import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private http: HttpClient
  ) {}

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

  hasUser(): Observable<firebase.default.User> {
    return this.angularFireAuth.authState;
  }

  loginRestApi(email: string, password: string): any {
    return this.http.post('https://platzi-store.herokuapp.com/auth', {
      email,
      password,
    });
  }
}
