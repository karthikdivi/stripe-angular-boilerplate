import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StripeHomeComponent } from './components/stripe-home/stripe-home.component';
import { StripePaymentCompleteComponent } from './components/stripe-payment-complete/stripe-payment-complete.component';
import { StripeUpdateCardDetailsComponent } from './components/stripe-update-card-details/stripe-update-card-details.component';

export const router: Routes = [
  { path: '', redirectTo: 'stripe-home', pathMatch: 'full' },
  { path: 'stripe-home', component: StripeHomeComponent },
  { path: 'stripe-payment-complete', component: StripePaymentCompleteComponent },
  { path: 'stripe-update-card-details', component: StripeUpdateCardDetailsComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    StripeHomeComponent,
    StripePaymentCompleteComponent,
    StripeUpdateCardDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
