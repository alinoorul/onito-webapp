import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictItemComponent } from './predict-item.component';

describe('PredictItemComponent', () => {
  let component: PredictItemComponent;
  let fixture: ComponentFixture<PredictItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
