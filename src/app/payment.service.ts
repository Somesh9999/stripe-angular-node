import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({providedIn:"root"})
export class PaymentService{

  constructor(private http:HttpClient, private router:Router){}

  createPayment(stripeToken:any, amount:number){
    const payload={
      stripeToken: stripeToken,
      amount:amount
    }
    this.http.post<{message:string}>("http://localhost:3030/create-checkout-session",payload).subscribe((message)=>{
      this.router.navigate(["/success"]);
    })
  }
}
