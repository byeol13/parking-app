import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersDeleteComponent } from './offers-delete.component';

describe('OffersDeleteComponent', () => {
  let component: OffersDeleteComponent;
  let fixture: ComponentFixture<OffersDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffersDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
