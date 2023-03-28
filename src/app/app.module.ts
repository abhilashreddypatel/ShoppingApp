import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ProductListComponent } from './product-list/product-list.component';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { ProductRowComponent } from './product-row/product-row.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, BreadcrumbsComponent, ProductListComponent, InventoryManagementComponent, ProductRowComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
