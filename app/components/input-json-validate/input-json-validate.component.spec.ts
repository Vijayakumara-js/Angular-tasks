import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputJsonValidateComponent } from './input-json-validate.component';

describe('InputJsonValidateComponent', () => {
  let component: InputJsonValidateComponent;
  let fixture: ComponentFixture<InputJsonValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputJsonValidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputJsonValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
