import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {ProyectModel} from "../models/proyect-model";
import {SaleOrderPaypalModel} from "../models/sale-order-paypal.model";

@Injectable({
  providedIn: 'root'
})
export class SalePaypalService {
  private PATH = 'sales-paypal';

  constructor( private afs: AngularFirestore ) { }

  public async createSalePaypal( sale: SaleOrderPaypalModel ) {
    const itemCollections = this.afs.collection<SaleOrderPaypalModel>(this.PATH);
    return itemCollections.add(sale);
  }
}
