/* Importamos input, output para la transicion de datos entres omponentes */
/* Importamos EventEmitter para emitir los datos desde el componente hijo a un componente padre */
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  DoCheck,
  OnDestroy,
} from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements DoCheck, OnInit, OnDestroy {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(private cartService: CartService) {
    console.log('constructor');
  }

  /* ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
    console.log(changes);
  }
 */
  ngOnInit(): void {
    /* console.log('OnInit'); */
  }

  ngDoCheck(): void {
    /* console.log('DoCheck'); */
  }

  ngOnDestroy(): void {
    /* console.log('OnDestroy'); */
  }

  addCart(): void {
    console.log('añador al carrito');
    this.cartService.addCart(this.product);
    /* .emit() emite el dato que queramos al componente padre, esto seria en React un hook pasado por props */
    /* this.productClicked.emit(this.product.id); */
  }
}
