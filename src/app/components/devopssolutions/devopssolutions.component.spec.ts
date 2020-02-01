import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopssolutionsComponent } from './devopssolutions.component';

describe('DevopssolutionsComponent', () => {
  let component: DevopssolutionsComponent;
  let fixture: ComponentFixture<DevopssolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevopssolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevopssolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
