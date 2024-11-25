import { TestBed } from '@angular/core/testing';

import { ParkingLotService } from './parking-lot.service';

describe('ParkingLotService', () => {
  let service: ParkingLotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingLotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
