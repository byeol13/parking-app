import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingMonthlyPassDetailsComponent } from './parking-monthly-pass-details.component';

describe('ParkingMonthlyPassDetailsComponent', () => {
  let component: ParkingMonthlyPassDetailsComponent;
  let fixture: ComponentFixture<ParkingMonthlyPassDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkingMonthlyPassDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingMonthlyPassDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
