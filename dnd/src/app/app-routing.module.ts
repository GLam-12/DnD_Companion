import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonsterFormPageComponent } from './monster-form-page/monster-form-page.component';
import { CampPageComponent } from './camp-page/camp-page.component';


const routes: Routes = [
  {path: 'monster-form', component: MonsterFormPageComponent},
  {path: 'camp-page', component: CampPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
