import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingOneTimeResDetailsComponent } from './parking-one-time-res-details.component';

describe('ParkingOneTimeResDetailsComponent', () => {
  let component: ParkingOneTimeResDetailsComponent;
  let fixture: ComponentFixture<ParkingOneTimeResDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkingOneTimeResDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingOneTimeResDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
