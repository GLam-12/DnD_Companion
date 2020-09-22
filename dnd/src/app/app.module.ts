import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistrationComponent } from './registration/registration.component';


import { NewCharComponent } from './new-char/new-char.component';

import { MonsterFormComponent } from './monster-form/monster-form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CampaignFormComponent } from './campaign-form/campaign-form.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NewCharComponent,
    MonsterFormComponent,
    NavigationComponent,
    CampaignFormComponent,
    CampaignListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
