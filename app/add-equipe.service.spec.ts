import { TestBed } from '@angular/core/testing';

import { AddEquipeService } from './add-equipe.service';

describe('AddEquipeService', () => {
  let service: AddEquipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddEquipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
