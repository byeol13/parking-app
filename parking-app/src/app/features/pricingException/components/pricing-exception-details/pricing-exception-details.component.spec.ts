import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingExceptionDetailsComponent } from './pricing-exception-details.component';

describe('PricingExceptionDetailsComponent', () => {
  let component: PricingExceptionDetailsComponent;
  let fixture: ComponentFixture<PricingExceptionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingExceptionDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingExceptionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
