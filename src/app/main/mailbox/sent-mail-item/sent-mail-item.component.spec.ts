import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentMailItemComponent } from './sent-mail-item.component';

describe('SentMailItemComponent', () => {
  let component: SentMailItemComponent;
  let fixture: ComponentFixture<SentMailItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentMailItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentMailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
