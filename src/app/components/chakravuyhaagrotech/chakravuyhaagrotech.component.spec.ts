import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChakravuyhaagrotechComponent } from './chakravuyhaagrotech.component';

describe('ChakravuyhaagrotechComponent', () => {
  let component: ChakravuyhaagrotechComponent;
  let fixture: ComponentFixture<ChakravuyhaagrotechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChakravuyhaagrotechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChakravuyhaagrotechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
