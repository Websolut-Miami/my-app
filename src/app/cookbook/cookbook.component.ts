import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.css']
})
export class CookbookComponent implements OnInit {

  loadedFeature = 'recipe';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
