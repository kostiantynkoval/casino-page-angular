import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameButtonComponent } from './game-button/game-button.component';
import { JackpotComponent } from './jackpot/jackpot.component';
import { GameWhiteButtonComponent } from './game-white-button/game-white-button.component';

const COMPONENTS = [
  GameButtonComponent,
  JackpotComponent,
  GameWhiteButtonComponent
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ ...COMPONENTS ],
  exports: [ ...COMPONENTS ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: SharedModule,
      providers: [],
    };
  }
}
