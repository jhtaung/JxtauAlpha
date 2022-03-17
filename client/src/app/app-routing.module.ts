import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppealDetailComponent } from './modules/pages/appeal-detail/appeal-detail.component';

import { AppealComponent } from './modules/pages/appeal/appeal.component';
import { HomeComponent } from './modules/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'appeal', component: AppealComponent },
  { path: 'appeal/:id', component: AppealDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
