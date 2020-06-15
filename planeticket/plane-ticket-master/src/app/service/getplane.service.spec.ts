import { TestBed } from '@angular/core/testing';

import { GetplaneService } from './getplane.service';

describe('GetplaneService', () => {
  let service: GetplaneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetplaneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
