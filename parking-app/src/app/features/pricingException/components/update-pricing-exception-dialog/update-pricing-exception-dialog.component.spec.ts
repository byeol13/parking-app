import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePricingExceptionDialogComponent } from './update-pricing-exception-dialog.component';

describe('UpdatePricingExceptionDialogComponent', () => {
  let component: UpdatePricingExceptionDialogComponent;
  let fixture: ComponentFixture<UpdatePricingExceptionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePricingExceptionDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePricingExceptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
