import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChefEquipeComponent } from './add-chef-equipe.component';

describe('AddChefEquipeComponent', () => {
  let component: AddChefEquipeComponent;
  let fixture: ComponentFixture<AddChefEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChefEquipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChefEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
