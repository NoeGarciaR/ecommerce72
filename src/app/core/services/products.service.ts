import { Injectable } from '@angular/core';
import {ProductModel} from "../models/product.model";
import {AngularFirestore} from "@angular/fire/firestore";
import {ProyectModel} from "../models/proyect-model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private PATH = 'products';

  products: ProductModel[] = [
    //{ nombre: 'Producto 1', precio: 34.55, id: 'idProducto1', sku: 'SKUPRODUCT1', subCategoria: 'MODA', descripcion: 'PRODUCTO DE MODA 1', categoria: 'PANTALON' },
  ];

  constructor( private afs: AngularFirestore ) { }

  public async createProduct( product: ProductModel ) {
    const itemCollections = this.afs.collection<ProductModel>(this.PATH);
    return itemCollections.add(product);
  }

  public readProducts(): Observable<ProductModel[]> {
    return this.afs.collection<ProductModel>(this.PATH).snapshotChanges().pipe(
      map(actions => actions.map( a => {
        const data = a.payload.doc.data() as ProductModel;
        const id = a.payload.doc.id;
        return { id, ...data};
      }))
    );
  }

  public updateProduct( product: ProductModel ) {
    let _product: ProductModel = {
      ...product
    };
    delete _product.id;
    return this.afs.doc(`${this.PATH}/${product.id}`).update(_product);
  }

  public deleteProduct(product: ProductModel ) {
    return this.afs.doc(`${this.PATH}/${product.id}`).delete();
  }
}
