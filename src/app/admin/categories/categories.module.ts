import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './components/categories/categories.component';
@NgModule({
  declarations: [CategoriesComponent],
  imports: [CommonModule, CategoriesRoutingModule, MaterialModule],
})
export class CategoriesModule {}
