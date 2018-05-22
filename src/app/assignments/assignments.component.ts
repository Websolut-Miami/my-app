import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  onIntervalFired(firedNumber: number) {
    console.log(firedNumber);
  }

  constructor() { }

  ngOnInit() {
  }

  

}
