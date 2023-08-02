import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePromotionComponent } from './liste-promotion.component';

describe('ListePromotionComponent', () => {
  let component: ListePromotionComponent;
  let fixture: ComponentFixture<ListePromotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListePromotionComponent]
    });
    fixture = TestBed.createComponent(ListePromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
