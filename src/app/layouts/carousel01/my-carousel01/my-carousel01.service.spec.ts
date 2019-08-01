import { TestBed } from '@angular/core/testing';

import { MyCarousel01Service } from './my-carousel01.service';

describe('MyCarousel01Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyCarousel01Service = TestBed.get(MyCarousel01Service);
    expect(service).toBeTruthy();
  });
});
