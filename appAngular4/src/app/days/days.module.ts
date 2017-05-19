import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaysRoutingModule } from './days-routing.module';
import { DayListComponent } from './day-list/day-list.component';
import { DayDetailsComponent } from './day-details/day-details.component';

@NgModule({
  imports: [
    CommonModule,
    DaysRoutingModule // routing settings for DaysModule
  ],
  declarations: [DayListComponent, DayDetailsComponent]
})
export class DaysModule { }