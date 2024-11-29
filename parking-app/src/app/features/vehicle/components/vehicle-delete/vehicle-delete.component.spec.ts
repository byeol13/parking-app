import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDeleteComponent } from './vehicle-delete.component';

describe('VehicleDeleteComponent', () => {
  let component: VehicleDeleteComponent;
  let fixture: ComponentFixture<VehicleDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
