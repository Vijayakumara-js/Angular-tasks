import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEditorFormComponent } from './input-editor-form.component';

describe('InputEditorFormComponent', () => {
  let component: InputEditorFormComponent;
  let fixture: ComponentFixture<InputEditorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputEditorFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputEditorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
