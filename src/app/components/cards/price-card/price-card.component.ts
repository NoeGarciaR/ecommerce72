import {Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import { IPriceItem } from 'src/app/data/prices';
import {NotificationsService} from "angular2-notifications";
declare var paypal;

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
})
export class PriceCardComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  @Input() price: IPriceItem;
  /*Comunicacion con el elemento padre*/
  @Output() response: EventEmitter<any> = new EventEmitter<any>();
  @Output() isProcess: EventEmitter<number> = new EventEmitter<number>(); //Si se esta procesando el pago


  constructor( ) { }
  title = 'angular-paypal-payment';

  ngOnInit() {
    this.isProcess.emit(0);
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
          this.isProcess.emit(1);
          const order = await actions.order.capture();
          await this.response.emit(order);
          await this.isProcess.emit(2);
          //console.log(order);
        },
        onError: err => {
          console.log(err);
          this.response.emit(3);
          /*this.response.emit(err);*/
        }
      })
      .render( this.paypalElement.nativeElement );
  }

}
