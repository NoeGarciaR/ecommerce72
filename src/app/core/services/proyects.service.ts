import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {ProyectModel} from "../models/proyect-model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {
  private PATH = 'proyects';

  constructor( private afs: AngularFirestore ) { }

  public async createProyect( proyect: ProyectModel ) {
    const itemCollections = this.afs.collection<ProyectModel>(this.PATH);
    return itemCollections.add(proyect);
  }

  public readProyects(): Observable<ProyectModel[]> {
    return this.afs.collection<ProyectModel>(this.PATH).snapshotChanges().pipe(
      map(actions => actions.map( a => {
        const data = a.payload.doc.data() as ProyectModel;
        const id = a.payload.doc.id;
        return { id, ...data};
      }))
    );
  }

  public updateProyect( proyect: ProyectModel ) {
    let _proyect: ProyectModel = {
      ...proyect
    };
    delete _proyect.id;
    return this.afs.doc(`${this.PATH}/${proyect.id}`).update(_proyect);
  }

  public deleteProyect(proyect: ProyectModel ) {
    return this.afs.doc(`${this.PATH}/${proyect.id}`).delete();
  }
}
