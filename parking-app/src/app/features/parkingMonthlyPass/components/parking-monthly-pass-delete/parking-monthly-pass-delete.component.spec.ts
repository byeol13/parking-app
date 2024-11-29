import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingMonthlyPassDeleteComponent } from './parking-monthly-pass-delete.component';

describe('ParkingMonthlyPassDeleteComponent', () => {
  let component: ParkingMonthlyPassDeleteComponent;
  let fixture: ComponentFixture<ParkingMonthlyPassDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkingMonthlyPassDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingMonthlyPassDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
