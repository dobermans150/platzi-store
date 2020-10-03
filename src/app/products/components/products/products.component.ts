import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
    console.log(this.productService.getProduct('1'));
  }

  clickProduct(id: number): void {
    console.log(id);
  }
}
