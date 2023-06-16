import { Component, OnInit } from '@angular/core';
import { CreateProductDto, ProductModel, UpdateProductDto } from '../entities/product.entity';
import { CatalogService } from 'src/app/modules/catalog/service/catalog.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: ProductModel[] = [];


  constructor(private catalogService: CatalogService, private router: Router) { }

  ngOnInit(): void {
    this.catalogService.getAllProducts().subscribe(data => {
      this.products = data;
    })
  }

  verProduct(id: ProductModel['id']) {
    this.router.navigate(['product', id]);
  }

  editarProduct(id: ProductModel['id']) {
    this.router.navigate(['editar', id]);
  }

  nuevoProduct() {
    this.router.navigate(['nuevo']);
  }

  deleteProduct(id: ProductModel['id']) {

    Swal.fire({
      title: '¿Estas seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Eliminado con Exito',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(() => {
          this.catalogService.destroy(id).subscribe(
            response => {
              this.products = this.products.filter(product => product.id != id);
              console.log(response);
              this.router.navigate(['/products']);
            }
          );
        }, 1700);
      }
    })
  }
}
