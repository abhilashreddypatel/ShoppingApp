import { Component, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.css'],
})
export class InventoryManagementComponent {
  product: Product[];

  constructor() {
    this.product = [
      new Product(
        'sita',
        'Banana',
        'www.google.com',
        ['men', 'Accesaries', 'Hats'],
        500
      ),
      new Product(
        'rama',
        'Carrot',
        'www.google.com',
        ['men', 'Accesaries', 'Hats'],
        500
      ),
      new Product(
        'rajyam',
        'visvam',
        'www.google.com',
        ['men', 'accessaries', 'bats'],
        800
      ),
    ];
  }
  onProductClicked(data: Product): void {
    console.log(data);
  }
}
