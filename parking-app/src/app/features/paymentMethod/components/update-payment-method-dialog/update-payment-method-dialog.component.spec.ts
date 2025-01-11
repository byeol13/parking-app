import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaymentMethodDialogComponent } from './update-payment-method-dialog.component';

describe('UpdatePaymentMethodDialogComponent', () => {
  let component: UpdatePaymentMethodDialogComponent;
  let fixture: ComponentFixture<UpdatePaymentMethodDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePaymentMethodDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePaymentMethodDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
