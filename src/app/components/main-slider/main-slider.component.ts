import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css']
})
export class MainSliderComponent implements OnInit {

  images: string[];
  config: any = {
    speed: 1000,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      disableOnInteraction: false
    }
  };

  constructor() { }

  ngOnInit() {
    this.loadImages();
  }

  loadImages() {
    this.images = [
      'assets/images/slider_big_bg.png',
      'assets/images/slider_big_bg.png',
      'assets/images/slider_big_bg.png'
    ];
  }
}
