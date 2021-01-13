import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-product-modal',
  templateUrl: './form-product-modal.component.html',
  styleUrls: ['./form-product-modal.component.scss']
})
export class FormProductModalComponent implements OnInit {
  @Input() buttonText: string = 'Boton';
  @Input() buttonIcon: string = 'iconsminds-folder-add--';
  modalRef: BsModalRef;

  imagesFiles: File[] = [];

  formulario: FormGroup;

  constructor(private modalService: BsModalService,
              private fb: FormBuilder
              ) {
    this.createForm();
  }

  ngOnInit(): void {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-xl' })
    );
  }

  createForm() {
    this.formulario = this.fb.group({
      nombre   : ['Producto 1', Validators.compose([Validators.required])],
      sku : ['SKU234', Validators.compose([Validators.required])],
      color   : ['Azul', Validators.compose([Validators.required])],
      precio  : ['235.45', Validators.compose([Validators.required])],
      categoria: ['Ropa', Validators.compose([Validators.required])],
      subCategoria: ['Dama', Validators.compose([Validators.required])],
      descripcion: ['Pantalon para dama de moda', Validators.compose([Validators.required])],
      fichaTecnica: ['Pantalon mezclilla ', Validators.compose([Validators.required])],
      alto: ['150', Validators.compose([Validators.required])],
      ancho: ['55', Validators.compose([Validators.required])],
      peso: ['350', Validators.compose([Validators.required])],
    });
  }

  saveProduct() {
    if ( this.imagesFiles.length != 0 && this.formulario.valid ) {
      console.log('Listo para subir');
    } else {
      console.log('No hay imagenes');
    }
  }
}
