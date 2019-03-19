import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeNewMailComponent } from './compose-new-mail.component';

describe('ComposeNewMailComponent', () => {
  let component: ComposeNewMailComponent;
  let fixture: ComponentFixture<ComposeNewMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposeNewMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeNewMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
