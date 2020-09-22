import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DmPageComponent } from './dm-page/dm-page.component';
import { CampFormPageComponent } from './camp-form-page/camp-form-page.component';


const routes: Routes = [
  { path: 'DungeonMaster', component: DmPageComponent },
  { path: 'Campaigns/new', component: CampFormPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
