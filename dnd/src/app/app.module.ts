import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistrationComponent } from './registration/registration.component';


import { NewCharComponent } from './new-char/new-char.component';

import { MonsterFormComponent } from './monster-form/monster-form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CampaignFormComponent } from './campaign-form/campaign-form.component';
import { LoginComponent } from './login/login.component';
import { PrivateDieComponent } from './private-die/private-die.component';
import { PublicDieComponent } from './public-die/public-die.component';
import { CharactersComponent } from './characters/characters.component';
import { MonstersListComponent } from './monsters-list/monsters-list.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { SingleCampaignInfoComponent } from './single-campaign-info/single-campaign-info.component';
import { CharPageComponent } from './char-page/char-page.component';
import { CampPageComponent } from './camp-page/camp-page.component';
import { CampFormPageComponent } from './camp-form-page/camp-form-page.component';
import { MonsterFormPageComponent } from './monster-form-page/monster-form-page.component';
import { CharFormPageComponent } from './char-form-page/char-form-page.component';
import { DmPageComponent } from './dm-page/dm-page.component';
import { LoginRegPageComponent } from './login-reg-page/login-reg-page.component';
import { PlayerPageComponent } from './player-page/player-page.component';
import { CharInfoComponent } from './char-info/char-info.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NewCharComponent,
    MonsterFormComponent,
    NavigationComponent,
    CampaignFormComponent,
    LoginComponent,
    PrivateDieComponent,
    PublicDieComponent,
    CharactersComponent,
    MonstersListComponent,
    CampaignListComponent,
    SingleCampaignInfoComponent,
    CharPageComponent,
    CampPageComponent,
    CampFormPageComponent,
    MonsterFormPageComponent,
    CharFormPageComponent,
    DmPageComponent,
    LoginRegPageComponent,
    PlayerPageComponent,
    CharInfoComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
