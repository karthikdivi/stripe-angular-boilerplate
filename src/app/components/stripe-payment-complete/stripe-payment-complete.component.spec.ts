import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripePaymentCompleteComponent } from './stripe-payment-complete.component';

describe('StripePaymentCompleteComponent', () => {
  let component: StripePaymentCompleteComponent;
  let fixture: ComponentFixture<StripePaymentCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripePaymentCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripePaymentCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
