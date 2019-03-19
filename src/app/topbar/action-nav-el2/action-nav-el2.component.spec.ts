import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionNavEl2Component } from './action-nav-el2.component';

describe('ActionNavEl2Component', () => {
  let component: ActionNavEl2Component;
  let fixture: ComponentFixture<ActionNavEl2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionNavEl2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionNavEl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
