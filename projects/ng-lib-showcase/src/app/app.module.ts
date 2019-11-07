import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgLibModule} from "./../../../ng-lib/src/lib/ng-lib.module"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
