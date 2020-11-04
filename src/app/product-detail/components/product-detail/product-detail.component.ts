import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string): void {
    this.productService
      .getProduct(id)
      .subscribe((product) => (this.product = product));
  }

  createProdcut(): void {
    this.productService
      .createProduct(this.product)
      .subscribe((product) => console.log(product));
  }

  updateProduct(): void {
    const editProduct: Partial<Product> = {
      description: 'Este producto fue editado',
      price: 999999,
    };

    this.productService
      .updateProduct(this.product.id, editProduct)
      .subscribe((product) => console.log(product));
  }

  deleteProduct(): void {
    this.productService
      .deleteProduct(this.product.id)
      .subscribe((product) => console.log(product));
  }
}
