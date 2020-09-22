import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharFormPageComponent } from './char-form-page/char-form-page.component';
import { CharPageComponent } from './char-page/char-page.component';


const routes: Routes = [

  {path: 'character', component: CharPageComponent},
  {path: 'create', component: CharFormPageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
