import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-zone-img-product',
  templateUrl: './drop-zone-img-product.component.html',
  styleUrls: ['./drop-zone-img-product.component.scss']
})
export class DropZoneImgProductComponent implements OnInit {

  files: File[] = [];

  constructor() { }
  ngOnInit(): void {
  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}
