import { Component, OnInit } from '@angular/core';
import {RecentGameWin} from "@app/models/recent-game-win.model";

@Component({
  selector: 'info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css']
})
export class InfoPanelComponent implements OnInit {

  games: RecentGameWin[];
  jackpots: any[];
  config: any = {
    speed: 800,
    slidesPerView: 3,
    spaceBetween: 5,
    loop: true,
    autoplay: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  };

  constructor() { }

  ngOnInit() {
    this.loadImages();
    this.getJackpots();
  }

  loadImages() {
    this.games = [
      {gameName: 'Ghotic', amount: 185, playerName: 'Vasiliy', image: 'assets/images/game1.png'},
      {gameName: 'Game of thrones', amount: 165.34, playerName: 'Petro', image: 'assets/images/game2.png'},
      {gameName: 'Robin', amount: 184, playerName: 'Gena', image: 'assets/images/game3.png'},
      {gameName: 'Batman', amount: 199.99, playerName: 'Grigori', image: 'assets/images/game4.png'},
      {gameName: 'Superman', amount: 185, playerName: 'Vasiliy', image: 'assets/images/game5.png'},
      {gameName: 'Aztec Gold', amount: 1850.56, playerName: 'Ivan', image: 'assets/images/game1.png'},
    ];
  }

  getJackpots() {
    this.jackpots = [
      { coinImage: 'assets/images/coin1.png', value: '7 859 352'},
      { coinImage: 'assets/images/coin2.png', value: '2 148 759'},
      { coinImage: 'assets/images/coin3.png', value: '1 589 654'},
    ];
  }

}
