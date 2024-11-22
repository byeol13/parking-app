import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingOneTimeResListComponent } from './parking-one-time-res-list.component';

describe('ParkingOneTimeResListComponent', () => {
  let component: ParkingOneTimeResListComponent;
  let fixture: ComponentFixture<ParkingOneTimeResListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkingOneTimeResListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingOneTimeResListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
