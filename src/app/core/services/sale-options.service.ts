import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {SaleOptionModel} from "../models/sale-option.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SaleOptionsService {
  private PATH = 'sale-options';

  constructor( private afs: AngularFirestore ) { }

  public getSaleOptions(): Observable<SaleOptionModel[]> {
    return this.afs.collection<SaleOptionModel>(this.PATH).snapshotChanges().pipe(
      map(actions => actions.map( a => {
        const data = a.payload.doc.data() as SaleOptionModel;
        const id = a.payload.doc.id;
        return { id, ...data};
      }))
    );
  }

}
