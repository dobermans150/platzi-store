import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { FormProductEditComponent } from './components/form-product-edit/form-product-edit.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';


const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'create',
        component: ProductFormComponent,
      },
      {
        path: 'inventory',
        component: InventoryComponent,
      },
      {
        path: 'home',
        component: AdminHomeComponent,
      },
      {
        path: 'products',
        component: ProductListComponent,
      },
      {
        path: 'products/create',
        component: FormProductComponent,
      },
      {
        path: 'products/edit/:id',
        component: FormProductEditComponent,
      },
      {
        path: 'basic',
        component: BasicFormComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
