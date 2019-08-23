import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carousel02ItemComponent } from './carousel02-item.component';

describe('Carousel02ItemComponent', () => {
  let component: Carousel02ItemComponent;
  let fixture: ComponentFixture<Carousel02ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carousel02ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carousel02ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
