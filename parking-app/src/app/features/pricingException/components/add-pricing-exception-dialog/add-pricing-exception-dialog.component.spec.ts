import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPricingExceptionDialogComponent } from './add-pricing-exception-dialog.component';

describe('AddPricingExceptionDialogComponent', () => {
  let component: AddPricingExceptionDialogComponent;
  let fixture: ComponentFixture<AddPricingExceptionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPricingExceptionDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPricingExceptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
