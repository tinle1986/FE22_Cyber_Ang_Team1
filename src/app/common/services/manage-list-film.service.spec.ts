import { TestBed } from '@angular/core/testing';

import { ManageListFilmService } from './manage-list-film.service';

describe('ManageListFilmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageListFilmService = TestBed.get(ManageListFilmService);
    expect(service).toBeTruthy();
  });
});
