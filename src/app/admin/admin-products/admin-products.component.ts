import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product-service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  getProducts$;

  constructor(ProductService:ProductService) {
    this.getProducts$ = ProductService.getAll();

   }


  ngOnInit(): void {
  }

}
