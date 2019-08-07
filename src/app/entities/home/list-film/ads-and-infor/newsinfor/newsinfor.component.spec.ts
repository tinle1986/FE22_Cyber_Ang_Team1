import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsinforComponent } from './newsinfor.component';

describe('NewsinforComponent', () => {
  let component: NewsinforComponent;
  let fixture: ComponentFixture<NewsinforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsinforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsinforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
