import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NewCharComponent } from './new-char/new-char.component';
=======
import { MonsterFormComponent } from './monster-form/monster-form.component';
>>>>>>> c5f9700bec362226900c2080f8ca7eb84f9eaddc

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NewCharComponent
=======
    MonsterFormComponent
>>>>>>> c5f9700bec362226900c2080f8ca7eb84f9eaddc
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
