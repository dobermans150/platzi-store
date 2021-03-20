import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ProductsContainer } from './containers/products/products.container';
import { SharedModule } from '../shared/shared.module';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './components/product/product.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ProductsContainer, ProductComponent],
  imports: [CommonModule, ProductsRoutingModule, SharedModule, MaterialModule],
})
export class ProductsModule {}
