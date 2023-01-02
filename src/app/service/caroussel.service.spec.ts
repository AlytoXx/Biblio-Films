import { TestBed } from '@angular/core/testing';

import { CarousselService } from './caroussel.service';

describe('CarousselService', () => {
  let service: CarousselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarousselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
