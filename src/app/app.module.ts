import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DataFileService } from './data-file.service';
import { RandomThreeComponent } from './random-three/random-three.component';
import { EpicFormComponent } from './epic-form/epic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NotFoundComponent,
    RandomThreeComponent,
    EpicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
