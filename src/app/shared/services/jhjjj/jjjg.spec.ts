import { TestBed } from '@angular/core/testing';

import { Jjjg } from './jjjg';

describe('Jjjg', () => {
  let service: Jjjg;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Jjjg);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
