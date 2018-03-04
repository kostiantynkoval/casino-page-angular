import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@app/models/menu-item';


const MENU_ITEMS = [
  { title: 'все игры', link: '/all-games' },
  { title: 'пополнение счета', link: '/fill-in' },
  { title: 'получить выигрыш', link: '/withdraw' },
  { title: 'бонусы', link: '/bonuses' },
  { title: 'мобильная версия', link: '/mobile' },
  { title: 'контакты', link: '/contacts' },
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.menuItems = MENU_ITEMS;
  }

}
