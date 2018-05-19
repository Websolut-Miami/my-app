import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.css']
})
export class CookbookComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToShopping() {
    this.router.navigate(['/cookbook/shopping']); 
  }

  goToRecipes() {
    this.router.navigate(['/cookbook/recipes']); 
  }

}
