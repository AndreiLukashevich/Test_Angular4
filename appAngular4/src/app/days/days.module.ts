import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { DaysRoutingModule } from './days-routing.module';
import { DayListComponent } from './day-list/day-list.component';
import { DayDetailsComponent } from './day-details/day-details.component';
import { TestModule } from "../test/test.module"



@NgModule({
  imports: [
    CommonModule,
    DaysRoutingModule, // routing settings for DaysModule
    FormsModule,
    TestModule, 
  ],
  declarations: [DayListComponent, DayDetailsComponent]
})
export class DaysModule { }
