import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutApprenantComponent } from './ajout-apprenant.component';

describe('AjoutApprenantComponent', () => {
  let component: AjoutApprenantComponent;
  let fixture: ComponentFixture<AjoutApprenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutApprenantComponent]
    });
    fixture = TestBed.createComponent(AjoutApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
