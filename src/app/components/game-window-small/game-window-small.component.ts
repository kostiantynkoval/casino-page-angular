import { Component, OnInit, Input, HostListener } from '@angular/core';
import { toggleHeight } from "@app/animations";

@Component({
  selector: 'game-window-small',
  templateUrl: './game-window-small.component.html',
  styleUrls: ['./game-window-small.component.css'],
  animations: [ toggleHeight ]
})
export class GameWindowSmallComponent implements OnInit {

  hoverStatus = 'void';

  @Input('game') game: any[];
  @HostListener('mouseover') onMouseOver() {
    this.hoverStatus = 'in';
  }
  @HostListener('mouseout') onMouseOut() {
    this.hoverStatus = 'void';
  }

  constructor() { }

  ngOnInit() {
  }

}
