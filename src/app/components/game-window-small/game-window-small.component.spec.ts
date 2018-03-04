import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWindowSmallComponent } from './game-window-small.component';

describe('GameWindowSmallComponent', () => {
  let component: GameWindowSmallComponent;
  let fixture: ComponentFixture<GameWindowSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameWindowSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameWindowSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
