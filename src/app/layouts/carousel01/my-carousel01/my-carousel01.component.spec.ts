import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCarousel01Component } from './my-carousel01.component';

describe('MyCarousel01Component', () => {
  let component: MyCarousel01Component;
  let fixture: ComponentFixture<MyCarousel01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCarousel01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCarousel01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
