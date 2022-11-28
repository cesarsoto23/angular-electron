import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsCreateComponent } from './product/products-create/products-create.component';
import { ProductsEditComponent } from './product/products-edit/products-edit.component';
import { ProductsListComponent } from './product/products-list/products-list.component';

const routes: Routes = [
  { path: 'createProduct', component: ProductsCreateComponent },
  { path: 'editProduct', component: ProductsEditComponent },
  { path: 'listProduct', component: ProductsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
