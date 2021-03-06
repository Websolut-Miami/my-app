import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import class name from recipe.model.ts
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] =[
    new Recipe(
      'Tacos Recipe', 
      'My first tacos recipe, this is da bomb!', 
      'https://i0.wp.com/ohmyveggies.com/wp-content/uploads/2013/09/roasted_sweet_potato_and_black_bean_tacos_recipe.jpg?resize=600%2C400&ssl=1'
    ),
    new Recipe(
      'Chicken Wangs', 
      'Chicken wangs a la bombizee!', 
      'https://thecozyapron.com/wp-content/uploads/2016/10/spicy-orange-chicken-wings_thecozyapron_10-17-16_1.jpg'
    ),
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
