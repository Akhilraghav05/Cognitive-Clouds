import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import {Routes, RouterModule} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {EuroPipe} from './euro.pipe'

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    EuroPipe,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    RouterModule.forRoot([
      {path:'',component:CardsComponent}
    ]),
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
