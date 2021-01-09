import {Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {FormControl, NgForm} from "@angular/forms";
import { WizardComponent as ArcWizardComponent } from 'angular-archwizard';
import {ProyectsService} from "../../../core/services/proyects.service";
import {ProyectModel} from "../../../core/models/proyect-model";
import {SaleOptionsService} from "../../../core/services/sale-options.service";
import {SaleOptionModel} from "../../../core/models/sale-option.model";
import {SaleOrderPaypalModel} from "../../../core/models/sale-order-paypal.model";
import {SalePaypalService} from "../../../core/services/sale-paypal.service";

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
  nameShop: string = 'Tienda 1';

  /*
    0 => Sin procesar
    1 => Procesando
    2 => Proceso exitoso
    3 => Rechazado
    4 => ya pagado
   */
  saleProcess: number = 0;

  public designs = [
    { id: 0, nombre: 'Exprés', url: 'https://e-commerce72.com/wp-content/uploads/2020/06/tienda-online-1-241x300.jpg' },
    { id: 1, nombre: 'Gráfico', url: 'https://e-commerce72.com/wp-content/uploads/2020/06/ecommerce-en-72-horas-mexico-1-241x300.jpg' },
    { id: 2, nombre: 'Práctico', url: 'https://e-commerce72.com/wp-content/uploads/2020/06/tienda-online-en-72-241x300.jpg' },
    { id: 3, nombre: 'Aventurero', url: 'https://e-commerce72.com/wp-content/uploads/2020/06/e-commerce-72-tienda-online-1-241x300.jpg' },
    { id: 4, nombre: 'Sin Límites', url: 'https://e-commerce72.com/wp-content/uploads/2020/06/cuanto-cuesta-una-tienda-virtual-241x300.jpg' },
    { id: 5, nombre: 'Minimalista', url: 'https://e-commerce72.com/wp-content/uploads/2020/06/cuanto-cuesta-un-e-commerce-241x300.jpg' }
  ];

  public colors = [
    { id: 0, nombre: 'Técnológico', url: 'https://e-commerce72.com/wp-content/uploads/2020/06/Paleta-de-color_TECNOLOGICO.jpg' },
    { id: 1, nombre: 'Fashion', url: 'https://e-commerce72.com/wp-content/uploads/2020/06/Paleta-de-color_FASHION.jpg' },
    { id: 2, nombre: 'Dinápmico', url: 'https://e-commerce72.com/wp-content/uploads/2020/06/Paleta-de-color_DINAMICO.jpg' },
    { id: 3, nombre: 'Formal', url: 'https://e-commerce72.com/wp-content/uploads/2020/06/Paleta-de-color_FORMAL.jpg' },
    { id: 4, nombre: 'Natural', url: 'https://e-commerce72.com/wp-content/uploads/2020/06/Paleta-de-color_NATURAL.jpg' },
  ];

  posting = false;

  public saleOptions: SaleOptionModel[] = [];

  private proyect: ProyectModel;

  constructor( private _ps: ProyectsService,
               private _sos: SaleOptionsService,
               private _sps: SalePaypalService,
               ) {
  }

  ngOnInit() {
    this.selectedDesign = 0;
    this.selectedColor = 0;
    this.getSaleOptions();
  }

  /*INICIO DE LOS FIRMULARIO DE STEPPERS*/
  onNextStep1() {
    this.formStep1.onSubmit(null);
    if (this.formStep1.valid) {
      this.wizard.goToNextStep();
    }
  }

  onNextStep2() {
    this.formStep2.onSubmit(null);
    if (this.formStep2.valid) {
      //this.addProyect();
      console.log(this.proyect);
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
  /* FIN DE LOS FORMULARIO DE STEEPERS */

  /* Agregando datos de proyects en firebase */
  /*
  public addProyect() {
    const _date = new Date().getTime();
    const _proyect: ProyectModel = {
      color: this.colors[this.selectedColor].nombre,
      desing: this.designs[this.selectedDesign].nombre,
      date: _date,
      fin: false,
      nameShop: this.nameShop,
      steep: 2
    };
    this.proyect = _proyect;
    this._ps.createProyect(_proyect)
      .then( (res ) => {
        this.proyect.id = res.id;
        this.proyect.uid = localStorage.getItem('_uid');
        localStorage.setItem('_proyect_act', JSON.stringify(this.proyect));
      })
      .catch( error => {
        console.log(error);
        this.proyect = null;
      });
  }
   */

  /* Métodos de sale options */
  public getSaleOptions() {
    this._sos.getSaleOptions().subscribe( saleOptions => {
      this.saleOptions = saleOptions;
    });
  }

  //Metodo para responder a un tipo de pago culminado
  validarPago( $event ) {
    if ( $event.status === 'COMPLETED' ) {
      let sale: SaleOrderPaypalModel = {
        order_id: $event.id,
        value: $event.purchase_units[0].amount.value,
        status: $event.status,
        date: new Date($event.update_time).getTime(),
        description: $event.purchase_units[0].description,
        user_id: localStorage.getItem('_uid')
      };
      this._sps.createSalePaypal(sale).then( (res) => {
        sale.id = res.id;
        let _proyect: ProyectModel = {
          uid: localStorage.getItem('_uid'),
          steep: 2,
          fin: false,
          price: sale.value,
          sale_option: sale.description,
          sale_order_id: sale.order_id,
        };
        this._ps.createProyect(_proyect).then( ( res) => {
          _proyect.id = res.id;
          this.proyect = _proyect;
          if ( this.saleProcess == 2 ) {
            this.wizard.goToNextStep();
            this.saleProcess = 4;
          }
        });
      });
    }
    /*
    let id = $event.id;
    let status = $event.status;
    let date = $event.update_time;
    let description = $event.purchase_units[0].description;
    let value = $event.purchase_units[0].value;
    let user_id = localStorage.getItem('_uid');
     */
  }
}
