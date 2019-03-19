import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionNavEl3Component } from './action-nav-el3.component';

describe('ActionNavEl3Component', () => {
  let component: ActionNavEl3Component;
  let fixture: ComponentFixture<ActionNavEl3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionNavEl3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionNavEl3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
