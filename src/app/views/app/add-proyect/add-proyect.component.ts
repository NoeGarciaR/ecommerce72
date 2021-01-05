import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, NgForm} from "@angular/forms";
import { WizardComponent as ArcWizardComponent } from 'angular-archwizard';
import {Observable} from "rxjs";

@Component({
  selector: 'app-add-proyect',
  templateUrl: './add-proyect.component.html',
  styleUrls: ['./add-proyect.component.scss']
})

export class AddProyectComponent implements OnInit {
  @ViewChild('formStep1') formStep1: NgForm;
  @ViewChild('formStep2') formStep2: NgForm;
  @ViewChild('formStep3') formStep3: NgForm;
  @ViewChild('wizard') wizard: ArcWizardComponent;

  selectedDesign: number;
  selectedColor: number;

  public designs = [
    { id: 1, nombre: 'Exprés', url: 'https://e-commerce72.com/wp-content/uploads/2020/06/tienda-online-1-241x300.jpg' },
    { id: 2, nombre: 'Gráfico', url: 'https://e-commerce72.com/wp-content/uploads/2020/06/ecommerce-en-72-horas-mexico-1-241x300.jpg' },
    { id: 3, nombre: 'Práctico', url: 'https://e-commerce72.com/wp-content/uploads/2020/06/tienda-online-en-72-241x300.jpg' },
    { id: 4, nombre: 'Aventurero', url: 'https://e-commerce72.com/wp-content/uploads/2020/06/e-commerce-72-tienda-online-1-241x300.jpg' },
    { id: 5, nombre: 'Sin Límites', url: 'https://e-commerce72.com/wp-content/uploads/2020/06/cuanto-cuesta-una-tienda-virtual-241x300.jpg' },
    { id: 6, nombre: 'Minimalista', url: 'https://e-commerce72.com/wp-content/uploads/2020/06/cuanto-cuesta-un-e-commerce-241x300.jpg' }
  ];

  public colors = [
    { id: 1, nombre: 'Técnológico', url: 'https://e-commerce72.com/wp-content/uploads/2020/06/Paleta-de-color_TECNOLOGICO.jpg' },
    { id: 2, nombre: 'Fashion', url: 'https://e-commerce72.com/wp-content/uploads/2020/06/Paleta-de-color_FASHION.jpg' },
    { id: 3, nombre: 'Dinámico', url: 'https://e-commerce72.com/wp-content/uploads/2020/06/Paleta-de-color_DINAMICO.jpg' },
    { id: 4, nombre: 'Formal', url: 'https://e-commerce72.com/wp-content/uploads/2020/06/Paleta-de-color_FORMAL.jpg' },
    { id: 5, nombre: 'Natural', url: 'https://e-commerce72.com/wp-content/uploads/2020/06/Paleta-de-color_NATURAL.jpg' },
  ];

  posting = false;
  constructor() {
  }

  ngOnInit() {
    this.selectedDesign = 1;
    this.selectedColor = 1;
  }

  onNextStep1() {
    this.formStep1.onSubmit(null);
    if (this.formStep1.valid) {
      this.wizard.goToNextStep();
    }
  }

  onNextStep2() {
    this.formStep2.onSubmit(null);
    if (this.formStep2.valid) {
      this.wizard.goToNextStep();
    }
  }

  onNextStep3() {
    this.formStep3.onSubmit(null);
    if (this.formStep3.valid) {
      this.posting = true;
      setTimeout(() => {
        this.posting = false;
      }, 2000);
      this.wizard.goToNextStep();
    }
  }

  seleccionar(i: number) {
    console.log(i);
  }
}
