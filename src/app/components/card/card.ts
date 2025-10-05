import { Component, inject, OnInit } from '@angular/core';
//1. importar la clase del componente y agregar a los componentes
import { ProductService } from '../../services/products';
import { Product } from '../../interfaces/product';


@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card implements OnInit {
//1. la inyección de dependencias y declaración de variables
_productService = inject(ProductService);
//variable

allProducts : Product[] = [];//vamos a guardar los productos que vienen de la base de datos

showProducts() {
//1. voy a hacer la peticion get
//2. voy a guardar en mi variable all products
//3. voy a mostrar en mi navegador

this._productService.getProduct().subscribe({
  //manejar errores -> Gestion de respuestas del back
  next:(response: any)=>{
    this.allProducts = response.data;
    console.log(this.allProducts);
  }, //respuestas psositivas del back
  error:(error: any)=>{
    console.log(error);
  } // respuestas de error del back
})

}

ngOnInit(): void {
  // ejecute una acción al cargarse por primara vez en el navegador
  this.showProducts();
}

}


