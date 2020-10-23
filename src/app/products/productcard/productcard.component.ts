import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})
export class ProductcardComponent implements OnInit {

  @Input('product') product: Product;
  @Input('show-actions') showAction = true;
  constructor() { }

  ngOnInit(): void {
  }

}
