import { TestBed } from '@angular/core/testing';

import { AddMembreService } from './add-membre.service';

describe('AddMembreService', () => {
  let service: AddMembreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddMembreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
