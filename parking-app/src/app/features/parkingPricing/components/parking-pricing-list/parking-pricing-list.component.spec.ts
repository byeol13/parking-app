import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingPricingListComponent } from './parking-pricing-list.component';

describe('ParkingPricingListComponent', () => {
  let component: ParkingPricingListComponent;
  let fixture: ComponentFixture<ParkingPricingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkingPricingListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingPricingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
