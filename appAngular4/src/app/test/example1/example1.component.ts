import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css'],
  inputs: ["value", "nameContent"]
})
export class Example1Component {

 nameContent: string;

    private intervalObject: any;
    private currentValue: number = 0;

    @Input()
    interval: number = 1000;

    @Output()
    tick: EventEmitter<number> = new EventEmitter();

    start() {
        if (this.intervalObject) return;
        this.intervalObject = setInterval(() => { this.callback() }, this.interval);
    }

    stop() {
        if(!this.intervalObject) return;
        clearInterval(this.intervalObject);
        this.intervalObject = false;
    }

    private callback() {
        this.currentValue++;
        this.tick.emit(this.currentValue);
    }

}
