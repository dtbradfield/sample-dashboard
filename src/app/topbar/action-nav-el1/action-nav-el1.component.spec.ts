import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionNavEl1Component } from './action-nav-el1.component';

describe('ActionNavEl1Component', () => {
  let component: ActionNavEl1Component;
  let fixture: ComponentFixture<ActionNavEl1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionNavEl1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionNavEl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
