import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavEl3Component } from './sidenav-el3.component';

describe('SidenavEl3Component', () => {
  let component: SidenavEl3Component;
  let fixture: ComponentFixture<SidenavEl3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavEl3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavEl3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
