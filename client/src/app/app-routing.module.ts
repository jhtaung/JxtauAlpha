import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppealComponent } from './modules/pages/appeal/appeal.component';

const routes: Routes = [
  { path: '', component: AppealComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
