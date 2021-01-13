import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProductModalComponent } from './form-product-modal/form-product-modal.component';
import {TranslateModule} from "@ngx-translate/core";
import { DropZoneImgProductComponent } from './drop-zone-img-product/drop-zone-img-product.component';
import {NgxDropzoneModule} from "ngx-dropzone";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [FormProductModalComponent, DropZoneImgProductComponent],
    exports: [
        FormProductModalComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        NgxDropzoneModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class ProductsModule { }
