import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogService } from '../service/catalog.service';
import { ProductModel, UpdateProductDto } from '../entities/product.entity';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})

export class EditProductComponent implements OnInit {

  constructor(private catalogService: CatalogService, private router: Router, private activerouter: ActivatedRoute) { }

  products: ProductModel = {
    title: '',
    description: '',
    price: 0,
    images: ''
  };
  editForm = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(0),
    description: new FormControl(''),
    images: new FormControl('')
  })

  ngOnInit(): void {
    let productId = this.activerouter.snapshot.paramMap.get('id');
    this.catalogService.getOne(productId).subscribe(data => {
      this.products = data;
      this.editForm.setValue({
        'title': this.products.title,
        'price': this.products.price,
        'description': this.products.description,
        'images': this.products.images
      });
      console.log(productId);
      console.log(this.editForm.value);
    })

  }

  submit(data: any) {
    if (this.products) {
      data.id = this.products.id;
    }
    this.catalogService.update(data).subscribe((result) => {
      if (result) {
        Swal.fire({
          icon: 'success',
          title: 'Actualizado con Exito',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
    setTimeout(() => {
      this.router.navigate(['/products'])
    }, 1700);
    console.log(data);
  }

  regresar() {
    this.router.navigate(['/products']);
  }

}
