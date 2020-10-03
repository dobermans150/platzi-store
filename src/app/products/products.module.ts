import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from '../shared/shared.module';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [CommonModule, ProductsRoutingModule, SharedModule],

})
export class ProductsModule {}
