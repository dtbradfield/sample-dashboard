import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentMailListComponent } from './sent-mail-list.component';

describe('SentMailListComponent', () => {
  let component: SentMailListComponent;
  let fixture: ComponentFixture<SentMailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentMailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentMailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
