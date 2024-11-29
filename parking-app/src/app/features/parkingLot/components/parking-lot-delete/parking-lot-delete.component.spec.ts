import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingLotDeleteComponent } from './parking-lot-delete.component';

describe('ParkingLotDeleteComponent', () => {
  let component: ParkingLotDeleteComponent;
  let fixture: ComponentFixture<ParkingLotDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkingLotDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingLotDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
