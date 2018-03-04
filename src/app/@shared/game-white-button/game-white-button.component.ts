import { Component, OnInit } from '@angular/core';
import { GameButtonComponent} from "@shared/game-button/game-button.component";

@Component({
  selector: 'game-white-button',
  templateUrl: './game-white-button.component.html',
  styleUrls: ['./game-white-button.component.css']
})
export class GameWhiteButtonComponent extends GameButtonComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    this.textColor = 'rgb(255,255,255)';
  }

}
