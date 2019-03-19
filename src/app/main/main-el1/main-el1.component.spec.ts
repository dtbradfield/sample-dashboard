import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEl1Component } from './main-el1.component';

describe('MainEl1Component', () => {
  let component: MainEl1Component;
  let fixture: ComponentFixture<MainEl1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainEl1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
