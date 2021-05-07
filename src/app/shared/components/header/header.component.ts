import { Component, OnInit, HostListener } from '@angular/core';
import { CartService } from '../../../core/services/cart/cart.service';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  total$: Observable<number>;
  installEvent = null;

  /* Usamos pipe para transformar el valor del de la subscripicon */
  /* En este caso lo que hacemos es hacer un contador y que este sea un observable. */
  /* De tal modo que no nos tenemos que preocupar por la subscricion */
  /* Si no que la vista es la que se preocupa de subscribirse. */

  constructor(private cartService: CartService) {
    this.total$ = this.cartService.cart$.pipe(
      map((products) => products.length)
    );
  }

  /*
    DE ESTA MANERA PODEMS SUBSCRIBIRNOS AL CARRITO OBSERVABLE

   constructor(private cartService: CartService) {
    this.cartService.cart$
    .subscribe((products) => {
      console.log(products);
      this.total = products.length;
    });
  }

  */

  ngOnInit(): void {}

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: Event): void {
    console.log(event);
    event.preventDefault();
    this.installEvent = event;
  }

  installByUser(): void {
    if (this.installEvent) {
      this.installEvent.prompt();
      this.installEvent.userChoice.then((rta) => {
        console.log(rta);
      });
    }
  }
}
