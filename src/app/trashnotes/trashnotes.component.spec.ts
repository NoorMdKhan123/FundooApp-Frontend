/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrashnotesComponent } from './trashnotes.component';

describe('TrashnotesComponent', () => {
  let component: TrashnotesComponent;
  let fixture: ComponentFixture<TrashnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashnotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
