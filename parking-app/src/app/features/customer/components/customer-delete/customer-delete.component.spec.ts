import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDeleteComponent } from './customer-delete.component';

describe('CustomerDeleteComponent', () => {
  let component: CustomerDeleteComponent;
  let fixture: ComponentFixture<CustomerDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
