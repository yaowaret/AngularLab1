import { TestBed } from '@angular/core/testing';

import { NewlocationService } from './newlocation.service';

describe('NewlocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewlocationService = TestBed.get(NewlocationService);
    expect(service).toBeTruthy();
  });
});
