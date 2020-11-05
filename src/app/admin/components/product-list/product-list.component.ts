import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchroducts();
  }

  fetchroducts(): void {
    this.productsService
      .getAllProducts()
      .subscribe((products) => (this.products = products));
  }

  deleteProduct(id: string): void {
    this.productsService.deleteProduct(id).subscribe((response) => {
      this.fetchroducts();
    });
  }
}
