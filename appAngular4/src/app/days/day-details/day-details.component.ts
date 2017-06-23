import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Day } from "../../shared/day";
import { DayService } from "../../shared/day.service";
import { Task } from "../task";

@Component({
    moduleId: module.id,
    selector: 'day-details',
    templateUrl: 'day-details.component.html',
    styleUrls: ["../../../../node_modules/bootstrap/dist/css/bootstrap.css"]
    //   styleUrls: ['day-details.component.css']
})
export class DayDetailsComponent implements OnInit {

    day: Day;

    model: Task = new Task("");

    input_edit: boolean = true;
    button_save: boolean = false;

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
        this.router.navigate(["/days", { id: pId }]);
    }

    editTask() {
        this.input_edit = false;
        this.button_save = true;
    }

    saveTask() {
        this.input_edit = true;
        this.button_save = false;
    }

    counter: number = 0;

    increment() {
        this.counter++;
    }  

    tickHandler1(value) {
        console.log("Tick Hanlder 1 - " + value);
    }
}