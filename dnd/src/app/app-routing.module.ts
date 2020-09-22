import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharFormPageComponent } from './char-form-page/char-form-page.component';
import { CharPageComponent } from './char-page/char-page.component';
import { LoginRegPageComponent } from './login-reg-page/login-reg-page.component';
import { PlayerPageComponent } from './player-page/player-page.component';
import { DmPageComponent } from './dm-page/dm-page.component';
import { CampFormPageComponent } from './camp-form-page/camp-form-page.component';
import { MonsterFormPageComponent } from './monster-form-page/monster-form-page.component';
import { CampPageComponent } from './camp-page/camp-page.component';



const routes: Routes = [
  {path: 'monster-form', component: MonsterFormPageComponent},
  {path: 'camp-page', component: CampPageComponent},
  { path: 'DungeonMaster', component: DmPageComponent },
  { path: 'Campaigns/new', component: CampFormPageComponent },
  {path: 'login_registration', component: LoginRegPageComponent},
  {path: 'player_page', component: PlayerPageComponent},
  {path: 'character', component: CharPageComponent},
  {path: 'create', component: CharFormPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
