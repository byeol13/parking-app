import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParkingMonthlyPassComponent } from './add-parking-monthly-pass.component';

describe('AddParkingMonthlyPassComponent', () => {
  let component: AddParkingMonthlyPassComponent;
  let fixture: ComponentFixture<AddParkingMonthlyPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddParkingMonthlyPassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddParkingMonthlyPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
