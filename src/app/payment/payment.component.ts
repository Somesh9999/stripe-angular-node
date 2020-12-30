import { HostListener, OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { PaymentService } from "../payment.service";
@Component({
  templateUrl: "./payment.component.html"
})
export class PaymentComponent{
  constructor(private http:HttpClient, private paymentService: PaymentService) { }
   amount:number=2000;
   email:string="test@test.com";
   openCheckout() {
      var handler= (<any>window).StripeCheckout.configure({
          key: 'pk_test_51I0jSuCdJXWbhyerOhnFT3NjhR7VQOJLQ86ejL52oomxciUlpSepU57PSJ0NMnFCAkb7y48HwKctIucqjNlrxYCJ00TtuQU6et',
          image: './assets/images/company-image.jpeg',
          locale: 'auto',
          token:  (token: any) =>{
            console.log(token);
            this.paymentService.createPayment(token,this.amount);
          }
      });
    handler.open({
      name: 'Fireship Store',
      description: 'any description',
      amount: this.amount,
      email: this.email,
    });

  }


}
