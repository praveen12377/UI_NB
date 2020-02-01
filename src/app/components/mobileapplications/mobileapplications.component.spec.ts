import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileapplicationsComponent } from './mobileapplications.component';

describe('MobileapplicationsComponent', () => {
  let component: MobileapplicationsComponent;
  let fixture: ComponentFixture<MobileapplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileapplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
