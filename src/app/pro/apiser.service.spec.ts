import { TestBed } from '@angular/core/testing';

import { ApiserService } from './apiser.service';

describe('ApiserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiserService = TestBed.get(ApiserService);
    expect(service).toBeTruthy();
  });
});
