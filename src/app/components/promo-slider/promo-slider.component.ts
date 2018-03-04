import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'promo-slider',
  templateUrl: './promo-slider.component.html',
  styleUrls: ['./promo-slider.component.css']
})
export class PromoSliderComponent implements OnInit {

  images: string[];
  config: any = {
    speed: 1000,
    spaceBetween: 0,
    loop: false,
    autoplay: {
      disableOnInteraction: false
    },
    pagination: '.my-pagination',
    paginationClickable: true,
    renderBullet: function (index, className) {
      return '<span class="new-' + className + '">' + (index + 1) + '</span>';
    },
  };

  constructor(private elRef: ElementRef ) { }

  ngOnInit() {
    this.loadImages();
    const el = this.elRef.nativeElement.querySelectorAll('.swiper-pagination-bullet');
    console.log(el)
  }

  loadImages() {
    this.images = [
      'assets/images/slider_big_bg.png',
      'assets/images/slider_big_bg.png',
      'assets/images/slider_big_bg.png'
    ];
  }

}
