import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import { IPriceItem } from 'src/app/data/prices';
declare var paypal;

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
})
export class PriceCardComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  @Input() price: IPriceItem;

  constructor() { }
  title = 'angular-paypal-payment';

  ngOnInit() {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.price.title,
                amount     : {
                  currency_code: 'MXN',
                  value        : this.price.price
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
