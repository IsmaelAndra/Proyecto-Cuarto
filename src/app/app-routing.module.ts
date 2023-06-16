import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './modules/catalog/product/product.component';
import { CreateProductComponent } from './modules/catalog/create-product/create-product.component';
import { ProductsComponent } from './modules/catalog/products/products.component';
import { EditProductComponent } from './modules/catalog/edit-product/edit-product.component';
import { HistoryComponent } from './modules/catalog/history/history.component';
import { CategoriesComponent } from './modules/catalog/categories/categories.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'editar/:id', component:EditProductComponent},
  {path: 'nuevo', component:CreateProductComponent},
  {path: 'product/:id', component:ProductComponent},
  {path: 'history', component:HistoryComponent},
  {path: 'category', component:CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
