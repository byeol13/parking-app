import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParkingPricingComponent } from './add-parking-pricing.component';

describe('AddParkingPricingComponent', () => {
  let component: AddParkingPricingComponent;
  let fixture: ComponentFixture<AddParkingPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddParkingPricingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddParkingPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
