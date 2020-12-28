import { Component } from "@angular/core";
import {StripeCheckoutLoader,StripeCheckoutHandler} from 'ng-stripe-checkout';

@Component({
  templateUrl: "./payment.component.html"
})
export class PaymentComponent{

  private stripeCheckoutHandler: StripeCheckoutHandler;

  constructor(private stripeCheckoutLoader: StripeCheckoutLoader) { }

  public ngAfterViewInit() {
    this.stripeCheckoutLoader.createHandler({
        key: 'pk_test_abcdefghijklmnopqrstuvwxyz',
        token: (token) => {
            // Do something with the token...
            console.log('Payment successful!', token);
        }
    }).then((handler: StripeCheckoutHandler) => {
        this.stripeCheckoutHandler = handler;
    });
}
}
