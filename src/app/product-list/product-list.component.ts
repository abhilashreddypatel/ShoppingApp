import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() productlist: Product[] | undefined;
  @Output() onProductSelected = new EventEmitter<Product>();
  private currentProduct: Product | undefined;

  constructor() {
    this.onProductSelected = new EventEmitter<Product>();
  }

  ngOnInit(): void {}

  clicked(data: Product): void {
    this.currentProduct = data;
    this.onProductSelected.emit(data);
  }
  isSelected(data: Product): boolean {
    if (!data || !this.currentProduct) {
      return false;
    }
    return data.sku === this.currentProduct.sku;
  }
}
