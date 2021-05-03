import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name: string = "Steve";
  testArray = ['value 1', 'value 2', 'value 3']
  greet(): void {
    alert("Hello " + this.name);
  };
}
