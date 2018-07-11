import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeUpdateCardDetailsComponent } from './stripe-update-card-details.component';

describe('StripeUpdateCardDetailsComponent', () => {
  let component: StripeUpdateCardDetailsComponent;
  let fixture: ComponentFixture<StripeUpdateCardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripeUpdateCardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeUpdateCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
