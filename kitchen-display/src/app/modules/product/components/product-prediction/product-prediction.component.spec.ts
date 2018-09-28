import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPredictionComponent } from './product-prediction.component';

describe('ProductPredictionComponent', () => {
  let component: ProductPredictionComponent;
  let fixture: ComponentFixture<ProductPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
