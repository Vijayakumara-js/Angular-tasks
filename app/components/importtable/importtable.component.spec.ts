import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImporttableComponent } from './importtable.component';

describe('ImporttableComponent', () => {
  let component: ImporttableComponent;
  let fixture: ComponentFixture<ImporttableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImporttableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImporttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
