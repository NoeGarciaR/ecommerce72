import {Component, ViewChild} from '@angular/core';
import {ProductsService} from "../../../../core/services/products.service";
import {ProductModel} from "../../../../core/models/product.model";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  products: ProductModel[];

  constructor( private _ps: ProductsService) {
  }


  ngOnInit() {
    this.products = this._ps.products;
  }

}
