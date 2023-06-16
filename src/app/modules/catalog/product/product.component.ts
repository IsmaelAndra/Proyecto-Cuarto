import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogService } from '../service/catalog.service';
import { ProductModel, UpdateProductDto } from '../entities/product.entity';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  
  constructor(private catalogService: CatalogService, private router: Router, private activerouter: ActivatedRoute) {}

  products: ProductModel = {
    title: '',
    description: '',
    price: 0,
    images: ''
  };

  ngOnInit(): void {
    let productId = this.activerouter.snapshot.paramMap.get('id');
    this.catalogService.getOne(productId).subscribe(data =>{
      this.products = data;
      console.log(this.products);
    })
  }
}
