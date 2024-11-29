import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingPricingDeleteComponent } from './parking-pricing-delete.component';

describe('ParkingPricingDeleteComponent', () => {
  let component: ParkingPricingDeleteComponent;
  let fixture: ComponentFixture<ParkingPricingDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkingPricingDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingPricingDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
