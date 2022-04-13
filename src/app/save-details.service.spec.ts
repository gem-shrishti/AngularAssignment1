import { TestBed } from '@angular/core/testing';

import { SaveDetailsService } from './save-details.service';

describe('SaveDetailsService', () => {
  let service: SaveDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
