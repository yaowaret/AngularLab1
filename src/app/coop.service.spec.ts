import { TestBed } from '@angular/core/testing';

import { CoopService } from './coop.service';

describe('CoopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoopService = TestBed.get(CoopService);
    expect(service).toBeTruthy();
  });
});
