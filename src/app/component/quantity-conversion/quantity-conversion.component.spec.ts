import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityConversionComponent } from './quantity-conversion.component';

describe('QuantityConversionComponent', () => {
  let component: QuantityConversionComponent;
  let fixture: ComponentFixture<QuantityConversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityConversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
