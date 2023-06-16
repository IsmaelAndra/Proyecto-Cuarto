import { Component, OnInit } from '@angular/core';
import { ProductModel, CreateProductDto, UpdateProductDto } from '../entities/product.entity';
import { CatalogService } from '../service/catalog.service';
import { FormControl, FormGroup, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  products: ProductModel = {
    title: '',
    description: '',
    price: 0,
    images: ''
  };

  nuevoForm = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(0),
    description: new FormControl(''),
    images: new FormControl('')
  })

  constructor(private catalogService: CatalogService, private router: Router,) { }
  ngOnInit(): void {
  }

  submit() {
    console.log(this.nuevoForm.value);
    // this.catalogService.store(this.nuevoForm.value).subscribe((result => {
    //   console.log(result);

    // }))
    // this.catalogService.store(data).subscribe((result) => {
    //   if (result) {
    //     Swal.fire({
    //       icon: 'success',
    //       title: 'Guardado con Exito',
    //       showConfirmButton: false,
    //       timer: 1500
    //     })
    //   }
    // })
    // setTimeout(() => {
    //   this.router.navigate(['/products'])
    // }, 1700);
    // console.log(data);
  }

  regresar() {
    this.router.navigate(['/products']);
  }
}
