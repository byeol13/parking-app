import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingExceptionDeleteComponent } from './pricing-exception-delete.component';

describe('PricingExceptionDeleteComponent', () => {
  let component: PricingExceptionDeleteComponent;
  let fixture: ComponentFixture<PricingExceptionDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingExceptionDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingExceptionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
