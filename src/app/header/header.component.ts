import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDatabinding() {
    this.router.navigate(['/databinding']); 
  }

  goToServers() {
    this.router.navigate(['/servers']); 
  }

  goToPracticeDirectives() {
    this.router.navigate(['/practice-directives']); 
  }

  goToCookbook() {
    this.router.navigate(['/cookbook']); 
  }

  goToAssignments() {
    this.router.navigate(['assignments']);
  }


}
