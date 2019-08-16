import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carousel02Component } from './carousel02.component';

describe('Carousel02Component', () => {
  let component: Carousel02Component;
  let fixture: ComponentFixture<Carousel02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carousel02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carousel02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
