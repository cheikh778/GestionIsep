import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFormateurComponent } from './detail-formateur.component';

describe('DetailFormateurComponent', () => {
  let component: DetailFormateurComponent;
  let fixture: ComponentFixture<DetailFormateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailFormateurComponent]
    });
    fixture = TestBed.createComponent(DetailFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
