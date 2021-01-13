import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-drop-zone-img-product',
  templateUrl: './drop-zone-img-product.component.html',
  styleUrls: ['./drop-zone-img-product.component.scss']
})
export class DropZoneImgProductComponent implements OnInit {
  @Output() filesItems: EventEmitter<File[]> = new EventEmitter<File[]>();

  files: File[] = [];

  constructor() { }
  ngOnInit(): void {
  }

  onSelect(event) {
    //console.log(event);
    this.files.push(...event.addedFiles);
    this.enviarElementos();
  }

  onRemove(event) {
    //console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
    this.enviarElementos();
  }

  enviarElementos() {
    this.filesItems.emit(this.files);
  }

  imprimir() {
    console.log(this.files);
  }

}
