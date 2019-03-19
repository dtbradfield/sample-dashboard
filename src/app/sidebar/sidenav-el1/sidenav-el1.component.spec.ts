import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavEl1Component } from './sidenav-el1.component';

describe('SidenavEl1Component', () => {
  let component: SidenavEl1Component;
  let fixture: ComponentFixture<SidenavEl1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavEl1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavEl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
