import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParkingOneTimeResComponent } from './add-parking-one-time-res.component';

describe('AddParkingOneTimeResComponent', () => {
  let component: AddParkingOneTimeResComponent;
  let fixture: ComponentFixture<AddParkingOneTimeResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddParkingOneTimeResComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddParkingOneTimeResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
