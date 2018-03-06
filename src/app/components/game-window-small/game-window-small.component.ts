import { Component, OnInit, Input } from '@angular/core';
import { toggleOpacity } from "@app/animations";

@Component({
  selector: 'game-window-small',
  templateUrl: './game-window-small.component.html',
  styleUrls: ['./game-window-small.component.css'],
  animations: [ toggleOpacity ]
})
export class GameWindowSmallComponent implements OnInit {

  hoverStatus: string;

  @Input('game') game: any[];

  constructor() { }

  ngOnInit() {
    this.hoverStatus = 'void';
  }

  onMouseOver() {
    this.hoverStatus = 'in';
    console.log('in');
  }

  onMouseOut() {
    this.hoverStatus = 'void';
    console.log('out');
  }

}
