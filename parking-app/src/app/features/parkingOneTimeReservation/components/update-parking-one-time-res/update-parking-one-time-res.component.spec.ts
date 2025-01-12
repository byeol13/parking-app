import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParkingOneTimeResComponent } from './update-parking-one-time-res.component';

describe('UpdateParkingOneTimeResComponent', () => {
  let component: UpdateParkingOneTimeResComponent;
  let fixture: ComponentFixture<UpdateParkingOneTimeResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateParkingOneTimeResComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateParkingOneTimeResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
