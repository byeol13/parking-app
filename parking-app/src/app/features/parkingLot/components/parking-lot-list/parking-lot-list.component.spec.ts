import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingLotListComponent } from './parking-lot-list.component';

describe('ParkingLotListComponent', () => {
  let component: ParkingLotListComponent;
  let fixture: ComponentFixture<ParkingLotListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkingLotListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingLotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
