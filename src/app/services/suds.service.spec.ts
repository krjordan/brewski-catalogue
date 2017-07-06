import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { SudsService } from './suds.service';

describe('SudsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SudsService],
      imports: [ HttpModule ]
    });
  });

  it('should ...', inject([SudsService], (service: SudsService) => {
    expect(service).toBeTruthy();
  }));
});
