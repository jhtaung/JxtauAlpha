import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppealComponent } from './modules/pages/appeal/appeal.component';
import { AppealDetailComponent } from './modules/pages/appeal-detail/appeal-detail.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { NotFoundComponent } from './modules/pages/not-found/not-found.component';
import { TemplateComponent } from './modules/pages/template/template.component';
import { TemplateDetailComponent } from './modules/pages/template-detail/template-detail.component';
import { AuthGuard } from './core/guards/auth.guard';
import { DepartmentComponent } from './modules/pages/department/department.component';
import { AxDocComponent } from './modules/pages/ax-doc/ax-doc.component';
import { EformUserComponent } from './modules/pages/eform-user/eform-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'ax-docs', component: AxDocComponent },
      { path: 'eform-users', component: EformUserComponent },
      { path: 'appeals', component: AppealComponent },
      { path: 'appeals/:id', component: AppealDetailComponent },
      { path: 'departments', component: DepartmentComponent },
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
