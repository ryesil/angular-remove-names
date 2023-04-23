import { TestBed } from '@angular/core/testing';

import { NamesProviderService } from './names-provider.service';

describe('NamesProviderService', () => {
  let service: NamesProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NamesProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
