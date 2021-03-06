import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router"

import { Day } from "../../shared/day";
import { DayService } from "../../shared/day.service";
import { GreetingComponent } from "../../test/greeting/greeting.component";



@Component({
  moduleId: module.id,
  selector: 'day-list',
  templateUrl: 'day-list.component.html',
  styleUrls: ['day-list.component.css']
})
export class DayListComponent implements OnInit {

    selectedId: number;
    days: Day[];

  constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private dayService: DayService) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
            this.selectedId = +params["id"];
            this.dayService 
                .getAll()    
                .then(result => this.days = result); 
        });
        console.log(new GreetingComponent().testvar)
  }

      isSelected(day: Day) {
        return day.id == this.selectedId;
    }

    onSelect(selected: Day) { 
        this.router.navigate(["/day", selected.id]);
    }

    counter: number = 0;

    increment() {
        this.counter++;
    }  

    tickHandler1(value) {
        console.log("Tick Hanlder 1 - " + value);
    }

}
