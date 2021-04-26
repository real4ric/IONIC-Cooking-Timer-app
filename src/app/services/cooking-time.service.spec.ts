import { TestBed } from '@angular/core/testing';

import { CookingTimeService } from './cooking-time.service';

describe('CookingTimeService', () => {
  let service: CookingTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookingTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
