import { Injectable } from '@angular/core';

import { Day } from "./day";

let days = [
  new Day(1, "Monday", "Walking fast"),
  new Day(2, "Tuesday", "Football"),
  new Day(3, "Wednesday", "Swimming"),
  new Day(4, "Thursday", "Skateboarding"),
  new Day(5, "Friday", "Volleyball"),
  new Day(6, "Saturday", "Billiards"),
  new Day(7, "Sunday", "Shopping"),
];

let daysPromise = Promise.resolve(days);

@Injectable()
export class DayService {

    getAll(): Promise<Day[]> {
        return daysPromise;
    }

    getDay(id: number): Promise<Day> {
        return daysPromise
            .then(days => days.find(x => x.id == id));
    }


}
