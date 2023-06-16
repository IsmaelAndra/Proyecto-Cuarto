import { Component } from '@angular/core';
import { CatalogService } from '../service/catalog.service';
import { ProductModel } from '../entities/product.entity';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {

  histories: ProductModel[] = [];
  
  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.catalogService.getAllProducts().subscribe(data => {
      this.histories = data;
    })
  }
}
