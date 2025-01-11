import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePricingExceptionComponent } from './update-pricing-exception.component';

describe('UpdatePricingExceptionComponent', () => {
  let component: UpdatePricingExceptionComponent;
  let fixture: ComponentFixture<UpdatePricingExceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePricingExceptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePricingExceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
