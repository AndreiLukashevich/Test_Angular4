import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example1Component } from './example1/example1.component';
import { GreetingComponent } from './greeting/greeting.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    Example1Component,
    GreetingComponent
  ],
  declarations: [Example1Component, GreetingComponent]
})
export class TestModule { }
