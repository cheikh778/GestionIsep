import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFormateurComponent } from './ajout-formateur.component';

describe('AjoutFormateurComponent', () => {
  let component: AjoutFormateurComponent;
  let fixture: ComponentFixture<AjoutFormateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutFormateurComponent]
    });
    fixture = TestBed.createComponent(AjoutFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
