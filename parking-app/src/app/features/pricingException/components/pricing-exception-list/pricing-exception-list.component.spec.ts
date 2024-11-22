import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingExceptionListComponent } from './pricing-exception-list.component';

describe('PricingExceptionListComponent', () => {
  let component: PricingExceptionListComponent;
  let fixture: ComponentFixture<PricingExceptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingExceptionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingExceptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
