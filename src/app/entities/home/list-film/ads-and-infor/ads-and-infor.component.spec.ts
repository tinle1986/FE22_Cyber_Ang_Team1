import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsAndInforComponent } from './ads-and-infor.component';

describe('AdsAndInforComponent', () => {
  let component: AdsAndInforComponent;
  let fixture: ComponentFixture<AdsAndInforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsAndInforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsAndInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
