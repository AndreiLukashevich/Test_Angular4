import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css'],
  inputs: ["contentName"] 
})
export class GreetingComponent implements OnInit {

  contentName: string = "default name";
  testvar: number = 2;
  constructor() { }

  ngOnInit() {
  }

}
