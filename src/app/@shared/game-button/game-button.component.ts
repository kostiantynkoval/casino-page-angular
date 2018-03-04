import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'game-button',
  templateUrl: './game-button.component.html',
  styleUrls: ['./game-button.component.css']
})
export class GameButtonComponent implements OnInit {
  @Input('bgColor') bgColor?: string;
  @Input('title') title: string;
  @Input('icon') icon?: string;
  bgColorCode: string;
  textColor: string;

  constructor() { }

  ngOnInit() {
    switch (this.bgColor) {
      case 'blue':
        this.bgColorCode = 'rgb(61,140,255)';
        this.textColor = 'rgb(165,255,255)';
        break;
      case 'red':
      default:
        this.bgColorCode = 'rgb(255,113,69)';
        this.textColor = 'rgb(255,211,196)';
        break;
    }
  }

}
