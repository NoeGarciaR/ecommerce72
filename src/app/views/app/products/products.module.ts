import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProductModalComponent } from './form-product-modal/form-product-modal.component';
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
    declarations: [FormProductModalComponent],
    exports: [
        FormProductModalComponent
    ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class ProductsModule { }
