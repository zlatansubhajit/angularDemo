import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DataFileService } from './data-file.service';
import { RandomThreeComponent } from './company/random-three.component';
import { EpicFormComponent } from './epic-form/epic-form.component';
import { FunctionalLocComponent } from './forms/functional-loc/functional-loc.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NotFoundComponent,
    RandomThreeComponent,
    EpicFormComponent,
    FunctionalLocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [DataFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
