import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeHomeComponent } from './stripe-home.component';

describe('StripeHomeComponent', () => {
  let component: StripeHomeComponent;
  let fixture: ComponentFixture<StripeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
