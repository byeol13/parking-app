import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParkingOneTimeResDialogComponent } from './add-parking-one-time-res-dialog.component';

describe('AddParkingOneTimeResDialogComponent', () => {
  let component: AddParkingOneTimeResDialogComponent;
  let fixture: ComponentFixture<AddParkingOneTimeResDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddParkingOneTimeResDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddParkingOneTimeResDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
