import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAndBlogComponent } from './event-and-blog.component';

describe('EventAndBlogComponent', () => {
  let component: EventAndBlogComponent;
  let fixture: ComponentFixture<EventAndBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventAndBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAndBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
