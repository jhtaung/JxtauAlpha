import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MaterialModule } from './material.module';

import { LoadingInterceptor } from './core/interceptors/loading.interceptor';

import { EditorComponent } from './modules/editor/editor.component';
import { TableComponent } from './modules/table/table.component';
import { NavComponent } from './modules/nav/nav.component';

import { AppealComponent } from './modules/pages/appeal/appeal.component';
import { AppealDetailComponent } from './modules/pages/appeal-detail/appeal-detail.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { NotFoundComponent } from './modules/pages/not-found/not-found.component';
import { TemplateComponent } from './modules/pages/template/template.component';
import { TemplateDetailComponent } from './modules/pages/template-detail/template-detail.component';
import { DepartmentComponent } from './modules/pages/department/department.component';


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    TableComponent,
    NavComponent,
    AppealComponent,
    AppealDetailComponent,
    HomeComponent,
    NotFoundComponent,
    TemplateComponent,
    TemplateDetailComponent,
    DepartmentComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule,
    MaterialModule
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
