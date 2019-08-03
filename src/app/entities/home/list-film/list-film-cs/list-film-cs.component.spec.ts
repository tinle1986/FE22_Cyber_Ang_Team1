import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilmCsComponent } from './list-film-cs.component';

describe('ListFilmCsComponent', () => {
  let component: ListFilmCsComponent;
  let fixture: ComponentFixture<ListFilmCsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFilmCsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFilmCsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
