import { Component, OnInit } from '@angular/core';

const PAYMENTS = ['assets/images/mastercard.png', 'assets/images/yandex.png', 'assets/images/visa.png', 'assets/images/liqpay.png', 'assets/images/qiwi.png',]
@Component({
  selector: 'payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  payments = PAYMENTS;

  constructor() { }

  ngOnInit() {

  }

}
