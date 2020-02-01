import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessoutsourcingComponent } from './businessoutsourcing.component';

describe('BusinessoutsourcingComponent', () => {
  let component: BusinessoutsourcingComponent;
  let fixture: ComponentFixture<BusinessoutsourcingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessoutsourcingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessoutsourcingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
