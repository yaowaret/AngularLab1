import { TestBed } from '@angular/core/testing';

import { NewstaffService } from './newstaff.service';

describe('NewstaffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewstaffService = TestBed.get(NewstaffService);
    expect(service).toBeTruthy();
  });
});
