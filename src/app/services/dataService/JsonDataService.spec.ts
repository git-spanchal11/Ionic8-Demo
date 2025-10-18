import { TestBed } from '@angular/core/testing';

import { JsonDataService } from './JsonDataService';

describe('Projects', () => {
  let service: JsonDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
