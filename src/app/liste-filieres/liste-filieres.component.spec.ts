import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFilieresComponent } from './liste-filieres.component';

describe('ListeFilieresComponent', () => {
  let component: ListeFilieresComponent;
  let fixture: ComponentFixture<ListeFilieresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeFilieresComponent]
    });
    fixture = TestBed.createComponent(ListeFilieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
