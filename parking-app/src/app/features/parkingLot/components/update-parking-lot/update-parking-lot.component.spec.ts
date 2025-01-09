import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParkingLotComponent } from './update-parking-lot.component';

describe('UpdateParkingLotComponent', () => {
  let component: UpdateParkingLotComponent;
  let fixture: ComponentFixture<UpdateParkingLotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateParkingLotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateParkingLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
