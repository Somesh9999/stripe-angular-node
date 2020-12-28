import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private http: HttpClient){};

  title = "angular-stripe";
  priceId = "price_1I1XO8CdJXWbhyerPpL5xtE8";
  product = {
    title: "Classic Peace Lily",
    subTitle: "Popular House Plant",
    description:
      "Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick.",
    price: 18.0,
  };
  quantity = 1;
  stripePromise = loadStripe(environment.stripe_key);

  async checkout() {
    // Call your backend to create the Checkout session.
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await this.stripePromise;

    this.http.post<{id:string}>("http://localhost:3030/create-checkout-session",stripe).subscribe((response=>{
      stripe.redirectToCheckout({
        sessionId: response.id
      })
    }),(err)=>{
      console.log(err);
    })
  }

}
