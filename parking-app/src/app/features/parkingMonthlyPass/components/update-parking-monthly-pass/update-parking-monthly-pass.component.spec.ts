import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParkingMonthlyPassComponent } from './update-parking-monthly-pass.component';

describe('UpdateParkingMonthlyPassComponent', () => {
  let component: UpdateParkingMonthlyPassComponent;
  let fixture: ComponentFixture<UpdateParkingMonthlyPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateParkingMonthlyPassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateParkingMonthlyPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
