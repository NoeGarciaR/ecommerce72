import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-form-product-modal',
  templateUrl: './form-product-modal.component.html',
  styleUrls: ['./form-product-modal.component.scss']
})
export class FormProductModalComponent implements OnInit {
  @Input() buttonText: string = 'Boton';
  @Input() buttonIcon: string = 'iconsminds-folder-add--';
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-xl' })
    );
  }
}
