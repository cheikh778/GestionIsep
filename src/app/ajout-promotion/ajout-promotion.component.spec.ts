import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPromotionComponent } from './ajout-promotion.component';

describe('AjoutPromotionComponent', () => {
  let component: AjoutPromotionComponent;
  let fixture: ComponentFixture<AjoutPromotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutPromotionComponent]
    });
    fixture = TestBed.createComponent(AjoutPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
