import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodDetailsComponent } from './payment-method-details.component';

describe('PaymentMethodDetailsComponent', () => {
  let component: PaymentMethodDetailsComponent;
  let fixture: ComponentFixture<PaymentMethodDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentMethodDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentMethodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
