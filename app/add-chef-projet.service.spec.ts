import { TestBed } from '@angular/core/testing';

import { AddChefProjetService } from './add-chef-projet.service';

describe('AddChefProjetService', () => {
  let service: AddChefProjetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddChefProjetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
