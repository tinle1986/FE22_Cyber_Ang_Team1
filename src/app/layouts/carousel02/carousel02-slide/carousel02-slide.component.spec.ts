import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carousel02SlideComponent } from './carousel02-slide.component';

describe('Carousel02SlideComponent', () => {
  let component: Carousel02SlideComponent;
  let fixture: ComponentFixture<Carousel02SlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carousel02SlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carousel02SlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
