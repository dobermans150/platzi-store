import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../../core/services/products/products.service';
import { MyValidators } from '../../../utils/validators';

@Component({
  selector: 'app-form-product-edit',
  templateUrl: './form-product-edit.component.html',
  styleUrls: ['./form-product-edit.component.scss'],
})
export class FormProductEditComponent implements OnInit {
  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productService.getProduct(this.id).subscribe((product) => {
        this.form.patchValue(product);
      });
    });
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      /* id: ['', [Validators.required]], */
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: ['', []],
      description: ['', [Validators.required]],
    });
  }

  // Functions
  saveProduct(event: Event): void {
    event.preventDefault();

    if (this.form.valid) {
      const product = this.form.value;
      this.productService
        .updateProduct(this.id, product)
        .subscribe((newProduct) => {
          console.log(
            'Producto enviado',
            product,
            'nuevo Producto',
            newProduct
          );
          this.router.navigate(['./admin/products']);
        });
    }
  }

  getError(inputName: string, errorName: string) {
    return this.form.get(inputName).hasError(errorName);
  }
}
