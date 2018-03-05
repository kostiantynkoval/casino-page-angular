import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {AppRoutingModule} from "@app/app-routing.module";
import { SwiperModule } from 'angular2-useful-swiper';

import {SharedModule} from "@shared/shared.module";

import {LanguageComponent} from '@app/components/header/language/language.component';
import {MenuComponent} from '@app/components/header/menu/menu.component';
import {QuickRegistrationComponent} from '@app/components/header/quick-registration/quick-registration.component';
import {SocialComponent} from '@app/components/header/social/social.component';
import { AllGamesComponent } from "@app/components/main/all-games/all-games.component";
import { InProgressComponent } from "@app/components/main/in-progress/in-progress.component";


import { AppComponent } from './app.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { InfoPanelComponent } from './components/info-panel/info-panel.component';
import { PromoSliderComponent } from './components/promo-slider/promo-slider.component';
import { GameWindowSmallComponent } from './components/game-window-small/game-window-small.component';
import { PaymentsComponent } from './components/footer/payments/payments.component';
import { BottomMenuComponent } from "@app/components/footer/menu/menu.component";
import { RegistrationModalComponent } from './components/registration-modal/registration-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LanguageComponent,
    MenuComponent,
    QuickRegistrationComponent,
    SocialComponent,
    AllGamesComponent,
    InProgressComponent,
    MainSliderComponent,
    InfoPanelComponent,
    PromoSliderComponent,
    GameWindowSmallComponent,
    PaymentsComponent,
    BottomMenuComponent,
    RegistrationModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
