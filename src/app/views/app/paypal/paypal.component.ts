import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
declare var paypal;

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss']
})
export class PaypalComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement : ElementRef;

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
                description: this.producto.descripcion,
                amount     : {
                  currency_code: 'MXN',
                  value        : this.producto.precio
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
