import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParkingPricingComponent } from './update-parking-pricing.component';

describe('UpdateParkingPricingComponent', () => {
  let component: UpdateParkingPricingComponent;
  let fixture: ComponentFixture<UpdateParkingPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateParkingPricingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateParkingPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
