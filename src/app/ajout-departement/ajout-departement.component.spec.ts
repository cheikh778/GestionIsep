import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDepartementComponent } from './ajout-departement.component';

describe('AjoutDepartementComponent', () => {
  let component: AjoutDepartementComponent;
  let fixture: ComponentFixture<AjoutDepartementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutDepartementComponent]
    });
    fixture = TestBed.createComponent(AjoutDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
