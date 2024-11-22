import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingPricingDetailsComponent } from './parking-pricing-details.component';

describe('ParkingPricingDetailsComponent', () => {
  let component: ParkingPricingDetailsComponent;
  let fixture: ComponentFixture<ParkingPricingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkingPricingDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingPricingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
