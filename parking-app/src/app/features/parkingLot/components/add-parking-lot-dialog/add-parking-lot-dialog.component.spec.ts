import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParkingLotDialogComponent } from './add-parking-lot-dialog.component';

describe('AddParkingLotDialogComponent', () => {
  let component: AddParkingLotDialogComponent;
  let fixture: ComponentFixture<AddParkingLotDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddParkingLotDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddParkingLotDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
