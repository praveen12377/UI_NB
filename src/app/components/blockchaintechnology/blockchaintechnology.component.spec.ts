import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchaintechnologyComponent } from './blockchaintechnology.component';

describe('BlockchaintechnologyComponent', () => {
  let component: BlockchaintechnologyComponent;
  let fixture: ComponentFixture<BlockchaintechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockchaintechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchaintechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
