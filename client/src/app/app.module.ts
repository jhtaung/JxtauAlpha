import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';

import { NavComponent } from './modules/nav/nav.component';
import { AppealComponent } from './modules/pages/appeal/appeal.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { AppealDetailComponent } from './modules/pages/appeal-detail/appeal-detail.component';
import { NotFoundComponent } from './modules/pages/not-found/not-found.component';
import { TemplateComponent } from './modules/pages/template/template.component';
import { TemplateDetailComponent } from './modules/pages/template-detail/template-detail.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { EditorComponent } from './modules/editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AppealComponent,
    AppealDetailComponent,
    HomeComponent,
    NotFoundComponent,
    TemplateComponent,
    TemplateDetailComponent,
    EditorComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    EditorModule,
    MaterialModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
