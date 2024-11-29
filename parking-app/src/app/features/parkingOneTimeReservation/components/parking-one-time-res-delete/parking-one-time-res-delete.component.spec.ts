import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingOneTimeResDeleteComponent } from './parking-one-time-res-delete.component';

describe('ParkingOneTimeResDeleteComponent', () => {
  let component: ParkingOneTimeResDeleteComponent;
  let fixture: ComponentFixture<ParkingOneTimeResDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkingOneTimeResDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingOneTimeResDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
