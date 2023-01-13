import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportMattableComponent } from './import-mattable.component';

describe('ImportMattableComponent', () => {
  let component: ImportMattableComponent;
  let fixture: ComponentFixture<ImportMattableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportMattableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportMattableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
