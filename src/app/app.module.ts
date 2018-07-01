import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StripeHomeComponent } from './cmponents/stripe-home/stripe-home.component';
import { StripePaymentCompleteComponent } from './cmponents/stripe-payment-complete/stripe-payment-complete.component';

export const router: Routes = [
  { path: '', redirectTo: 'stripe-home', pathMatch: 'full' },
  { path: 'stripe-home', component: StripeHomeComponent },
  { path: 'stripe-payment-complete', component: StripePaymentCompleteComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    StripeHomeComponent,
    StripePaymentCompleteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
