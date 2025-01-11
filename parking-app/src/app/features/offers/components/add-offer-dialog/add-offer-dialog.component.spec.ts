import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOfferDialogComponent } from './add-offer-dialog.component';

describe('AddOfferDialogComponent', () => {
  let component: AddOfferDialogComponent;
  let fixture: ComponentFixture<AddOfferDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddOfferDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOfferDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
