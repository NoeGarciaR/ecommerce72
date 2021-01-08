import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {SaleOptionModel} from "../../../core/models/sale-option.model";
declare var paypal;

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss']
})
export class PaypalComponent implements OnInit {
  locale = '';
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  @Input() saleOption: any;

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
