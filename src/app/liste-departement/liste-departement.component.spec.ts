import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDepartementComponent } from './liste-departement.component';

describe('ListeDepartementComponent', () => {
  let component: ListeDepartementComponent;
  let fixture: ComponentFixture<ListeDepartementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDepartementComponent]
    });
    fixture = TestBed.createComponent(ListeDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
