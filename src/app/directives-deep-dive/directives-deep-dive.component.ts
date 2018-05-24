import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-deep-dive',
  templateUrl: './directives-deep-dive.component.html',
  styleUrls: ['./directives-deep-dive.component.css']
})
export class DirectivesDeepDiveComponent implements OnInit {

  //numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  onlyOdd = false;
  oddNumbers = [1,3,5,7,9,11,13,15,17,19];
  evenNumbers = [0,2,4,6,8,10,12,14,16,18,20];

  constructor() { }

  ngOnInit() {
  }

}
