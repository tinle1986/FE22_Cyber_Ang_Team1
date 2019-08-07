import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilmNPComponent } from './list-film-np.component';

describe('ListFilmNPComponent', () => {
  let component: ListFilmNPComponent;
  let fixture: ComponentFixture<ListFilmNPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFilmNPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFilmNPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
