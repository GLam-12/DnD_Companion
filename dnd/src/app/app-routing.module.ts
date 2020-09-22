import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegPageComponent } from './login-reg-page/login-reg-page.component';
import { PlayerPageComponent } from './player-page/player-page.component';


const routes: Routes = [
  {path: 'login_registration', component: LoginRegPageComponent},
  {path: 'player_page', component: PlayerPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
