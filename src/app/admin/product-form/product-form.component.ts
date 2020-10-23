import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/categories.service';
import { ProductService } from '../../product-service';
import 'rxjs/add/operator/take';
// import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  category$;
  product:any = {};
  id;
  constructor(
    route: ActivatedRoute,
    categoryService: CategoriesService,
    private ProductService: ProductService,
    private router: Router,
    private db: AngularFireDatabase
  ) {
    this.category$ = categoryService.getCategories();

    this.id = route.snapshot.paramMap.get('id');

    if (this.id) this.ProductService.getParticularProduct(this.id).take(1).subscribe((p) => {
      this.product = p;
      console.log(this.product);
    });
  }

  ngOnInit(): void {
  }

  save(productData) {
    if (this.id) this.ProductService.updateProduct(this.id, productData);
    else this.ProductService.saveProduct(productData);

    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (confirm('Are you sure you want to delete this product?')) {
      this.ProductService.deleteProduct(this.id);
      this.router.navigate(['/admin/products']);
    }
  }
}
