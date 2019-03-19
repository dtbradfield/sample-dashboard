import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEl2Component } from './main-el2.component';

describe('MainEl2Component', () => {
  let component: MainEl2Component;
  let fixture: ComponentFixture<MainEl2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainEl2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
