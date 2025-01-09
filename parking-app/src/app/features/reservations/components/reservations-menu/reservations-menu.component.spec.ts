import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsMenuComponent } from './reservations-menu.component';

describe('ReservationsMenuComponent', () => {
  let component: ReservationsMenuComponent;
  let fixture: ComponentFixture<ReservationsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationsMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
