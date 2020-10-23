import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../product-service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  product: Product[] = [];
  filteredProduct: Product[] = [];
  cate;
  
  constructor(router: ActivatedRoute, productService: ProductService) {
    productService
      .getAll()
      .switchMap((p: any) => {
        this.product = p;
        return router.queryParamMap;
      })
      .subscribe(params => {
        this.cate = params.get('category');
        this.filteredProduct = (this.cate) ?
          this.product.filter(p => p.category === this.cate) :
          this.product;
      })
  }

  ngOnInit(): void {
  }

}
