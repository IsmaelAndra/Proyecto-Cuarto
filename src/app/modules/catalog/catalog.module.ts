import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { StoreComponent } from './store/store.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HistoryComponent } from './history/history.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

// const routes: Routes = [
//   {
//     path: '', 
//     component: DashboardComponent,
//     children: [
//       {
//         path: '',
//         component: ProductsComponent
//       },
//       {
//         path: '/editar/:id',
//         component: EditProductComponent
//       },
//       {
//         path: '/create',
//         component: CreateProductComponent
//       },
//       {
//         path: '/product/:id',
//         component: ProductComponent
//       }
//     ]
//   }
// ]


@NgModule({
  declarations: [
    ProductsComponent,
    CategoriesComponent,
    StoreComponent,
    ProductComponent,
    CreateProductComponent,
    EditProductComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    ProductsComponent,
    CategoriesComponent,
    StoreComponent,
    ProductComponent,
    CreateProductComponent,
    EditProductComponent,
    HistoryComponent
  ]
})
export class CatalogModule { }
