import { Injectable } from '@angular/core';
import {ProductModel} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: ProductModel[] = [
    { nombre: 'Producto 1', precio: 34.55, id: 'idProducto1', sku: 'SKUPRODUCT1', subCategoria: 'MODA', descripcion: 'PRODUCTO DE MODA 1', categoria: 'PANTALON' },
  ];

  constructor() { }
}
