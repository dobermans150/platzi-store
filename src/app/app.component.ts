import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AngularFireMessaging } from '@angular/fire/messaging';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

declare var gtag;

interface Token {
  token: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  /* Variable donde se va a almacenar el token */
  private tokenCollection: AngularFirestoreCollection<Token>;

  constructor(
    private router: Router,
    private swUpdate: SwUpdate,
    private angularFireMessaging: AngularFireMessaging,
    private angularFirestore: AngularFirestore
  ) {
    this.tokenCollection = this.angularFirestore.collection<Token>('tokens');

    const navEndEvents$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );

    /* Nos traemos la ruta final al cual navega el usuario */
    navEndEvents$.subscribe((event: NavigationEnd) => {
      gtag('config', 'G-L6B4H683FT', {
        page_path: event.urlAfterRedirects,
        page_title: event.urlAfterRedirects,
      });
    });
  }
  ngOnInit(): void {
    this.updatePWA();
    this.requestPermission();
    this.listenNotification();
  }

  /* Actualiamos los serviceworkers de nuestra app cuando halla una nueva actualizacion */
  updatePWA(): void {
    this.swUpdate.available.subscribe((value) => {
      console.log('update', value);
      window.location.reload();
    });
  }

  /* Le pedimos permiso al usuario de la notificacion */
  requestPermission(): void {
    this.angularFireMessaging.requestToken.subscribe((token) => {
      console.log(token);
      this.tokenCollection.add({ token });
    });
  }

  /* Escuchamos la notificacion entrante */
  listenNotification(): void {
    this.angularFireMessaging.messages.subscribe((message) => {
      console.log(message);
    });
  }
}
