import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVehicleDialogComponent } from './update-vehicle-dialog.component';

describe('UpdateVehicleDialogComponent', () => {
  let component: UpdateVehicleDialogComponent;
  let fixture: ComponentFixture<UpdateVehicleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateVehicleDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVehicleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
