import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jackpot',
  templateUrl: './jackpot.component.html',
  styleUrls: ['./jackpot.component.css']
})
export class JackpotComponent implements OnInit {
  @Input('image') image;
  @Input('amount') amount;

  constructor() { }

  ngOnInit() {
  }

}
