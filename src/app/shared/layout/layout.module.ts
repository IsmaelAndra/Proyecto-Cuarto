import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavComponent } from '../components/nav/nav.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavComponent,
    FooterComponent,
    SidebarComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutComponent,
    NavComponent,
    FooterComponent,
    SidebarComponent,
    BreadcrumbComponent
  ]
})
export class LayoutModule { }
