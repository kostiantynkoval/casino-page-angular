import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllGamesComponent } from "@app/components/main/all-games/all-games.component";
import { InProgressComponent} from "@app/components/main/in-progress/in-progress.component";

const routes: Routes = [
  { path: 'all-games', component: AllGamesComponent },
  { path: 'fill-in', component: InProgressComponent },
  { path: 'withdraw', component: InProgressComponent },
  { path: 'bonuses', component: InProgressComponent },
  { path: 'mobile', component: InProgressComponent },
  { path: 'contacts', component: InProgressComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
