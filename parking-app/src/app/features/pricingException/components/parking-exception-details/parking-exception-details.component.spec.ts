import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingExceptionDetailsComponent } from './parking-exception-details.component';

describe('ParkingExceptionDetailsComponent', () => {
  let component: ParkingExceptionDetailsComponent;
  let fixture: ComponentFixture<ParkingExceptionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkingExceptionDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingExceptionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
