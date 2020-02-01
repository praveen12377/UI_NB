import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingplatformComponent } from './tradingplatform.component';

describe('TradingplatformComponent', () => {
  let component: TradingplatformComponent;
  let fixture: ComponentFixture<TradingplatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingplatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingplatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
