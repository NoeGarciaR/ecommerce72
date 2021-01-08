import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {SaleOptionModel} from "../../../core/models/sale-option.model";
declare var paypal;

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss']
})
export class PaypalComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  @Input() saleOption: SaleOptionModel;

  producto = {
    descripcion : 'producto en venta',
    precio      : 150,
    img         : 'https://brooksbrothers.vteximg.com.br/arquivos/ids/188129-1024-1243/100077337-1.jpg?v=637401850262230000'
  };

  title = 'angular-paypal-payment';

  ngOnInit() {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.saleOption.title,
                amount     : {
                  currency_code: 'MXN',
                  value        : this.saleOption.price
                }
              }
            ]
          })
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);

        },
        onError: err => {
          console.log(err);

        }
      })
      .render( this.paypalElement.nativeElement );
  }
}
