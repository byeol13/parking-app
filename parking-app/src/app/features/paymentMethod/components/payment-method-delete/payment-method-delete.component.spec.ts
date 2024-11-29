import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodDeleteComponent } from './payment-method-delete.component';

describe('PaymentMethodDeleteComponent', () => {
  let component: PaymentMethodDeleteComponent;
  let fixture: ComponentFixture<PaymentMethodDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentMethodDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentMethodDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
