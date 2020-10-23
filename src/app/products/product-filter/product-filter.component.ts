import { Component, Input, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/categories.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  category$;
  @Input('category') category;
  
  constructor(category:CategoriesService) { 
  this.category$ = category.getCategories();
  }

  ngOnInit(): void {
  }

}
