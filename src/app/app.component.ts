import {Component, OnInit} from '@angular/core';
import {toggleHeight} from "@app/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ toggleHeight ]
})
export class AppComponent implements OnInit{

  modalStatus: string;

  constructor() {}

  ngOnInit() {
    this.modalStatus = 'void';
  }

  openModal() {
    this.modalStatus = 'in';
  }

  closeModal() {
    this.modalStatus = 'void';
  }
}
