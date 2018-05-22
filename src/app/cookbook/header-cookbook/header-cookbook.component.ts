import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-cookbook',
  templateUrl: './header-cookbook.component.html',
  styleUrls: ['./header-cookbook.component.css']
})
export class HeaderCookbookComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  constructor() { }

  ngOnInit() {
  }

}
