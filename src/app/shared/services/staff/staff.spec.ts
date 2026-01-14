import { TestBed } from '@angular/core/testing';

import { Staff } from './staffs.service';

describe('Staff', () => {
  let service: Staff;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Staff);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
