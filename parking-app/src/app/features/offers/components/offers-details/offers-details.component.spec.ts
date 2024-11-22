import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersDetailsComponent } from './offers-details.component';

describe('OffersDetailsComponent', () => {
  let component: OffersDetailsComponent;
  let fixture: ComponentFixture<OffersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffersDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
