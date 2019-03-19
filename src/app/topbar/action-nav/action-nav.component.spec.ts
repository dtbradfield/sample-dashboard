import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionNavComponent } from './action-nav.component';

describe('ActionNavComponent', () => {
  let component: ActionNavComponent;
  let fixture: ComponentFixture<ActionNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
