import { TestBed } from '@angular/core/testing';

import { AddChefEquipeService } from './add-chef-equipe.service';

describe('AddChefEquipeService', () => {
  let service: AddChefEquipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddChefEquipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
