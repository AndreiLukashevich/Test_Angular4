import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  content = 'Home page.'

   tickHandler1(value) {
        console.log("Tick Hanlder 1 - " + value);
    }
  
  constructor() { }

  ngOnInit() {
  }

}
