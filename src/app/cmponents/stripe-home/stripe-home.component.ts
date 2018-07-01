import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var Stripe: any;

@Component({
  selector: 'app-stripe-home',
  templateUrl: './stripe-home.component.html',
  styleUrls: ['./stripe-home.component.css']
})
export class StripeHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onStripe(key, email){
    console.log('Button clicked'); 
    var routerRef = this.router;
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_OaC9DzpaRJ1tXxmSMyM125b2',
      image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
      locale: 'auto',
      token: function(token) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(`Send the to server side`, token);
        routerRef.navigate(['/stripe-payment-complete']);
      }
    });

      handler.open({
        name: 'My Application name',
        description: 'desctiption about the application',
        amount: 200
      });
  }
}
