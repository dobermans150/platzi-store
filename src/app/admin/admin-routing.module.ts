import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
