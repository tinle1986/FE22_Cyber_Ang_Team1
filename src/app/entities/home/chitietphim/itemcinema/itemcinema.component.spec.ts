import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemcinemaComponent } from './itemcinema.component';

describe('ItemcinemaComponent', () => {
  let component: ItemcinemaComponent;
  let fixture: ComponentFixture<ItemcinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemcinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemcinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
