import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParkingPricingDialogComponent } from './add-parking-pricing-dialog.component';

describe('AddParkingPricingDialogComponent', () => {
  let component: AddParkingPricingDialogComponent;
  let fixture: ComponentFixture<AddParkingPricingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddParkingPricingDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddParkingPricingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
