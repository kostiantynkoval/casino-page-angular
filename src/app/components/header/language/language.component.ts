import { Component, OnInit, HostListener } from '@angular/core';
import { toggleHeight } from '@app/animations';
import { LanguageItem } from "@app/models/language-item";


const LANGUAGES = [
  { code: 'en', name: 'English', image: 'assets/images/en.png'},
  { code: 'ru', name: 'Russian', image: 'assets/images/ru.png'}
];

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css'],
  animations: [ toggleHeight ]
})
export class LanguageComponent implements OnInit {

  languages: LanguageItem[];
  currentLanguage: LanguageItem;
  langAnimStatus: string;

  constructor() { }

  @HostListener('document:click') onClick() {
    this.langAnimStatus = 'void';
  }

  ngOnInit() {
    this.languages = LANGUAGES;
    this.langAnimStatus = 'void';
    this.currentLanguage = this.languages[0];
  }

  openDropdown(e: Event) {
    e.stopPropagation();
    this.langAnimStatus = 'in';
  }

  saveLanguage(language) {
    this.langAnimStatus = 'void';
    this.currentLanguage = language;
  }



}
