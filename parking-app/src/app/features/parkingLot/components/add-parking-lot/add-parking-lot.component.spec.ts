import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParkingLotComponent } from './add-parking-lot.component';

describe('AddParkingLotComponent', () => {
  let component: AddParkingLotComponent;
  let fixture: ComponentFixture<AddParkingLotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddParkingLotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddParkingLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
