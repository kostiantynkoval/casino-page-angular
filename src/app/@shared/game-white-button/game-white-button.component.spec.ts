import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWhiteButtonComponent } from './game-white-button.component';

describe('GameWhiteButtonComponent', () => {
  let component: GameWhiteButtonComponent;
  let fixture: ComponentFixture<GameWhiteButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameWhiteButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameWhiteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
