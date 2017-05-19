import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Day } from "../../shared/day";
import { DayService } from "../../shared/day.service";

@Component({
  moduleId: module.id,
  selector: 'day-details',
  templateUrl: 'day-details.component.html',
  styleUrls: ['day-details.component.css']
})
export class DayDetailsComponent implements OnInit {

  day: Day;

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private service: DayService) { }

    ngOnInit() {

        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params["id"];
            this.service
                .getDay(id)  
                .then(result => this.day = result);
        });
    }

    goToDaysList() {
        let pId = this.day ? this.day.id : null
        this.router.navigate(["/days", { id: pId}]);
    }
}