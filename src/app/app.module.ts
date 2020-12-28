import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductComponent } from './product/product.component';
import { SuccessComponent } from './success/success.component';
import { FailureComponent } from './failure/failure.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    ProductComponent,
    SuccessComponent,
    FailureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
