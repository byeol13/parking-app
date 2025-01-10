import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentParkingPricingComponent } from './current-parking-pricing.component';

describe('CurrentParkingPricingComponent', () => {
  let component: CurrentParkingPricingComponent;
  let fixture: ComponentFixture<CurrentParkingPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentParkingPricingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentParkingPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
