/* Importamos input, output para la transicion de datos entres omponentes */
/* Importamos EventEmitter para emitir los datos desde el componente hijo a un componente padre */
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy,
} from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements DoCheck, OnInit, OnDestroy {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('constructor');
  }

  /* ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
    console.log(changes);
  }
 */
  ngOnInit(): void {
    console.log('OnInit');
  }

  ngDoCheck(): void {
    console.log('DoCheck');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
  }

  addCart(): void {
    console.log('añador al carrito');

    /* .emit() emite el dato que queramos al componente padre, esto seria en React un hook pasado por props */
    this.productClicked.emit(this.product.id);
  }
}
