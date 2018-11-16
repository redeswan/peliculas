import { TestBed } from '@angular/core/testing';

import { LoadJsonService } from './load-json.service';

describe('LoadJsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadJsonService = TestBed.get(LoadJsonService);
    expect(service).toBeTruthy();
  });
});
