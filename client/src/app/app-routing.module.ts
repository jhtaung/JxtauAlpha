import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppealComponent } from './modules/pages/appeal/appeal.component';
import { AppealDetailComponent } from './modules/pages/appeal-detail/appeal-detail.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { NotFoundComponent } from './modules/pages/not-found/not-found.component';
import { TemplateComponent } from './modules/pages/template/template.component';
import { TemplateDetailComponent } from './modules/pages/template-detail/template-detail.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'appeals', component: AppealComponent },
      { path: 'appeals/:id', component: AppealDetailComponent },
      { path: 'templates', component: TemplateComponent },
      { path: 'templates/:id', component: TemplateDetailComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
