import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductsService } from '../../../core/services/products/products.service';
import { MyValidators } from '../../../utils/validators';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm(): void {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: ['', []],
      description: ['', [Validators.required]],
    });
  }

  saveProduct(event: Event): void {
    event.preventDefault();

    if (this.form.valid) {
      const product = this.form.value;
      this.productService.createProduct(product).subscribe((newProduct) => {
        console.log('Producto enviado', product, 'nuevo Producto', newProduct);
        this.router.navigate(['./admin/products']);
      });
    }
  }

  getError(inputName: string, errorName: string) {
    return this.form.get(inputName).hasError(errorName);
  }
}
