import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureRatingComponent } from './feature-rating.component';

describe('FeatureRatingComponent', () => {
  let component: FeatureRatingComponent;
  let fixture: ComponentFixture<FeatureRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
