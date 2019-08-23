import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carousel03Component } from './carousel03.component';

describe('Carousel03Component', () => {
  let component: Carousel03Component;
  let fixture: ComponentFixture<Carousel03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carousel03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carousel03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
