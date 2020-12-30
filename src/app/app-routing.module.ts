import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FailureComponent } from './failure/failure.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductComponent } from './product/product.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path:"",component:PaymentComponent},
  {path:"success",component:SuccessComponent},
  {path:"failure",component:FailureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
