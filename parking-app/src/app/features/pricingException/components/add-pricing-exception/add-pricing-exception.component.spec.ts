import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPricingExceptionComponent } from './add-pricing-exception.component';

describe('AddPricingExceptionComponent', () => {
  let component: AddPricingExceptionComponent;
  let fixture: ComponentFixture<AddPricingExceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPricingExceptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPricingExceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
