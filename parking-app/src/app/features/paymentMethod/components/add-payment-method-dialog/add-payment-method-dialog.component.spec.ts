import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentMethodDialogComponent } from './add-payment-method-dialog.component';

describe('AddPaymentMethodDialogComponent', () => {
  let component: AddPaymentMethodDialogComponent;
  let fixture: ComponentFixture<AddPaymentMethodDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPaymentMethodDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPaymentMethodDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
