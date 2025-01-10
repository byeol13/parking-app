import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParkingPricingDialogComponent } from './update-parking-pricing-dialog.component';

describe('UpdateParkingPricingDialogComponent', () => {
  let component: UpdateParkingPricingDialogComponent;
  let fixture: ComponentFixture<UpdateParkingPricingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateParkingPricingDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateParkingPricingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
