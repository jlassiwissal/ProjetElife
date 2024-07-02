import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChefProjetComponent } from './add-chef-projet.component';

describe('AddChefProjetComponent', () => {
  let component: AddChefProjetComponent;
  let fixture: ComponentFixture<AddChefProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChefProjetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChefProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
