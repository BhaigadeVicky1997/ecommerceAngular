import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/product-service';
import {Product} from '../../models/product.model';
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  getProducts$;
  products: Product[];
  filteredProduct:any[];
  subscription:Subscription;

  constructor(ProductService:ProductService) {
    this.subscription = ProductService.getAll().subscribe(product=>{
      this.filteredProduct = this.products = product
    })
     
   }

   filter(query:string){
   this.filteredProduct = query ?
   this.products.filter(p=> p.title.includes(query)):
   this.products;
   }

  ngOnInit(): void {
  }

}
