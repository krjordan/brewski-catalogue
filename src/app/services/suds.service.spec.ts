import { TestBed, inject } from '@angular/core/testing';

import { SudsService } from './suds.service';

describe('SudsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SudsService]
    });
  });

  it('should ...', inject([SudsService], (service: SudsService) => {
    expect(service).toBeTruthy();
  }));
});
