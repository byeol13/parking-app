import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParkingMonthlyPassDialogComponent } from './add-parking-monthly-pass-dialog.component';

describe('AddParkingMonthlyPassDialogComponent', () => {
  let component: AddParkingMonthlyPassDialogComponent;
  let fixture: ComponentFixture<AddParkingMonthlyPassDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddParkingMonthlyPassDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddParkingMonthlyPassDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
