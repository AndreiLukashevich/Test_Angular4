import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";

import { HomeComponent } from './home/home.component';

import { DaysModule } from "./days/days.module";
import { DayService } from "./shared/day.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DaysModule
  ],
  providers: [DayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
