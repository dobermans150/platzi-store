import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductsService } from '../../../core/services/products/products.service';
import { Router } from '@angular/router';

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

  saveProduct(event: Event): void {
    event.preventDefault();

    if (this.form.valid) {
      const product = this.form.value;
      this.productService.createProduct(product).subscribe((response) => {
        this.router.navigate(['./admin/products']);
      });
    }
    console.log(this.form.value);
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: ['', []],
      description: ['', [Validators.required]],
    });
  }
}
