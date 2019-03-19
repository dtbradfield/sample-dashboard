import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavEl2Component } from './sidenav-el2.component';

describe('SidenavEl2Component', () => {
  let component: SidenavEl2Component;
  let fixture: ComponentFixture<SidenavEl2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavEl2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavEl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
