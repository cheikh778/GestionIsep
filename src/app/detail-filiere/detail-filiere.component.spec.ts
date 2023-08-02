import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFiliereComponent } from './detail-filiere.component';

describe('DetailFiliereComponent', () => {
  let component: DetailFiliereComponent;
  let fixture: ComponentFixture<DetailFiliereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailFiliereComponent]
    });
    fixture = TestBed.createComponent(DetailFiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
