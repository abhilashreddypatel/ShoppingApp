import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css'],
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product | undefined;

  constructor() {}

  ngOnInit(): void {}
}
