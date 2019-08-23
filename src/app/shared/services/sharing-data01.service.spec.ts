import { TestBed } from '@angular/core/testing';

import { SharingData01Service } from './sharing-data01.service';

describe('SharingData01Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharingData01Service = TestBed.get(SharingData01Service);
    expect(service).toBeTruthy();
  });
});
