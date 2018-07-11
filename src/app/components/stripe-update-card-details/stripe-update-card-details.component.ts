import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stripe-update-card-details',
  templateUrl: './stripe-update-card-details.component.html',
  styleUrls: ['./stripe-update-card-details.component.css']
})
export class StripeUpdateCardDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onUpdateCardDetails(){
    console.log('onUpdateCardDetails');
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
        //routerRef.navigate(['/stripe-payment-complete']);
        alert('Card details updated successfully!');
      }
    });

      handler.open({
        name: 'My Application name',
        description: 'desctiption about the application',
        panelLabel: 'Update Card Details'
      });
  }

}
