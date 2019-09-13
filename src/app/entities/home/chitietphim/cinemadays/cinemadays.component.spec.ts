import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemadaysComponent } from './cinemadays.component';

describe('CinemadaysComponent', () => {
  let component: CinemadaysComponent;
  let fixture: ComponentFixture<CinemadaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemadaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemadaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
