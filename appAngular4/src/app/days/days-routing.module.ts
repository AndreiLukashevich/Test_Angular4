import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DayListComponent } from './day-list/day-list.component';
import { DayDetailsComponent } from './day-details/day-details.component';

const routes: Routes = [{ path: "days", component: DayListComponent },
            { path: "day/:id", component: DayDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DaysRoutingModule { }
