import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ServersComponent } from './servers/servers.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PracticeDirectivesComponent } from './practice-directives/practice-directives.component';
import { CookbookComponent } from './cookbook/cookbook.component';
import { ShoppingComponent } from './cookbook/shopping/shopping.component';
import { RecipesComponent } from './cookbook/recipes/recipes.component';
import { RecipeDetailsComponent } from './cookbook/recipes/recipe-details/recipe-details.component';
import { RecipeListComponent } from './cookbook/recipes/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './cookbook/shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './cookbook/shopping/shopping-edit/shopping-edit.component';


const routes: Routes = [
  { path: 'servers', component: ServersComponent },
  { path: 'databinding', component: DatabindingComponent },
  { path: 'practice-directives', component: PracticeDirectivesComponent },
  { path: 'cookbook', component: CookbookComponent },
  { path: 'cookbook/shopping', component: ShoppingComponent },
  { path: 'cookbook/recipes', component: RecipesComponent },
  { path: 'cookbook/recipes/recipe-details', component: RecipeDetailsComponent },
  { path: 'cookbook/recipes/recipe-list', component: RecipeListComponent },
  { path: 'cookbook/shopping/shopping-list', component: ShoppingListComponent },
  { path: 'cookbook/shopping/shopping-edit', component: ShoppingEditComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ 
  RouterModule 
  ]
})
export class AppRoutingModule { }