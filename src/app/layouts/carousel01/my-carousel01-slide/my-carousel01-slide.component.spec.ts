import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCarousel01SlideComponent } from './my-carousel01-slide.component';

describe('MyCarousel01SlideComponent', () => {
  let component: MyCarousel01SlideComponent;
  let fixture: ComponentFixture<MyCarousel01SlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCarousel01SlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCarousel01SlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
