import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {ImgUploadModel} from "../models/img-upload.model";
import * as firebase from 'firebase';
import {ImgProductModel} from "../models/img-product.model";

@Injectable({
  providedIn: 'root'
})
export class ImgUploadService {
  private PATH = 'img';

  constructor( private db: AngularFirestore) { }

  upload( imgs: ImgUploadModel[], idProduct: string ) {
    const storageRef = firebase.storage().ref();

    for ( const item of imgs ) {
      item.isUpload = true;
      if ( item.progress >= 100 ) {
        continue;
      }
      const uploadTask: firebase.storage.UploadTask = storageRef.child(`${ this.PATH }/${ item.name }`).put( item.file );

      uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED,
        ( snapshot: firebase.storage.UploadTaskSnapshot ) =>
          item.progress = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100,
        ( error ) => console.error('Error al subir', error ),
        () => {
          //console.log('Imagen cargada correctamente');
          uploadTask.snapshot.ref.getDownloadURL().then(URL => {
            let _imagen: ImgProductModel = {
              name: item.name,
              url: URL,
              product_id: idProduct
            };
            this.saveImg( _imagen );
          });
          item.isUpload = false;
        });
    }
  }
  private saveImg( img: ImgProductModel ) {
    //console.log(imagen);
    this.db.collection(`/${ this.PATH }`)
      .add( img );
  }
}
