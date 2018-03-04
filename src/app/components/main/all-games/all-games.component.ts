import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

const BUTTONS = [
  { name: 'popular', className: 'far fa-gem'},
  { name: 'new', className: 'fas fa-plus-circle'},
  { name: 'slot games', className: 'fas fa-money-bill-alt'},
  { name: 'card games', className: 'fas fa-heart'},
  { name: 'roulette', className: 'far fa-gem'},
];

const GAMES = [
  { name: 'lucky magic', image: 'assets/images/game1.png'},
  { name: 'lucky magic', image: 'assets/images/game1.png'},
  { name: 'lucky magic', image: 'assets/images/game1.png'},
  { name: 'lucky magic', image: 'assets/images/game1.png'},
  { name: 'lucky magic', image: 'assets/images/game1.png'},
  { name: 'anubis\' secret', image: 'assets/images/game2.png'},
  { name: 'anubis\' secret', image: 'assets/images/game2.png'},
  { name: 'anubis\' secret', image: 'assets/images/game2.png'},
  { name: 'anubis\' secret', image: 'assets/images/game2.png'},
  { name: 'anubis\' secret', image: 'assets/images/game2.png'},
  { name: 'dream of knight', image: 'assets/images/game3.png'},
  { name: 'dream of knight', image: 'assets/images/game3.png'},
  { name: 'dream of knight', image: 'assets/images/game3.png'},
  { name: 'dream of knight', image: 'assets/images/game3.png'},
  { name: 'dream of knight', image: 'assets/images/game3.png'},
  { name: 'submarine adventure', image: 'assets/images/game4.png'},
  { name: 'submarine adventure', image: 'assets/images/game4.png'},
  { name: 'submarine adventure', image: 'assets/images/game4.png'},
  { name: 'the big money scent', image: 'assets/images/game5.png'},
  { name: 'the big money scent', image: 'assets/images/game5.png'},
  { name: 'the big money scent', image: 'assets/images/game5.png'}
];

@Component({
  selector: 'all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.css']
})
export class AllGamesComponent implements OnInit {

  @ViewChild('popularity') popularity: ElementRef;
  @ViewChild('alphabet') alphabet: ElementRef;
  buttons: any[];
  games: any[];
  sort: number;
  searchStr: string;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.buttons = BUTTONS;
    this.games = GAMES;
  }

  chooseSorting(option) {
    if (option === 'popularity') {
      this.renderer.setStyle(this.popularity.nativeElement, 'font-weight', '600');
      this.renderer.setStyle(this.alphabet.nativeElement, 'font-weight', '400');
    } else {
      this.renderer.setStyle(this.popularity.nativeElement, 'font-weight', '400');
      this.renderer.setStyle(this.alphabet.nativeElement, 'font-weight', '600');
    }
  }

  initSearch() {
    console.log('Here I have to start searching by this value: ', this.searchStr);
  }
}
