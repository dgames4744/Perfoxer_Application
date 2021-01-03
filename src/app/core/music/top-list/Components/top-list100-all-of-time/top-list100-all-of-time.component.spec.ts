import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopList100AllOfTimeComponent } from './top-list100-all-of-time.component';

describe('TopList100AllOfTimeComponent', () => {
  let component: TopList100AllOfTimeComponent;
  let fixture: ComponentFixture<TopList100AllOfTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopList100AllOfTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopList100AllOfTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
