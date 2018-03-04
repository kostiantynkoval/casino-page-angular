import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bottom-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class BottomMenuComponent implements OnInit {

  menus = ['about casino', 'terms and conditions', 'responsible gaming', 'contact us']
  constructor() { }

  ngOnInit() {
  }

}
