import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-directives',
  templateUrl: './practice-directives.component.html',
  styleUrls: ['./practice-directives.component.css']
})
export class PracticeDirectivesComponent implements OnInit {

  showSecret = false;
  log = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date);

  }

  constructor() { }

  ngOnInit() {
  }

}
