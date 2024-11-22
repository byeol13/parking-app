import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingMonthlyPassListComponent } from './parking-monthly-pass-list.component';

describe('ParkingMonthlyPassListComponent', () => {
  let component: ParkingMonthlyPassListComponent;
  let fixture: ComponentFixture<ParkingMonthlyPassListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkingMonthlyPassListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingMonthlyPassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
