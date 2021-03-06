import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { PracticeDirectivesComponent } from './practice-directives/practice-directives.component';
import { CookbookComponent } from './cookbook/cookbook.component';
import { ShoppingComponent } from './cookbook/shopping/shopping.component';
import { RecipesComponent } from './cookbook/recipes/recipes.component';
import { HeaderCookbookComponent } from './cookbook/header-cookbook/header-cookbook.component';
import { RecipeListComponent } from './cookbook/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './cookbook/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './cookbook/recipes/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './cookbook/shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './cookbook/shopping/shopping-edit/shopping-edit.component';
import { CockpitComponent } from './databinding/cockpit/cockpit.component';
import { ServerElementComponent } from './databinding/server-element/server-element.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { GameControlComponent } from './assignments/game-control/game-control.component';
import { OddComponent } from './assignments/game-control/odd/odd.component';
import { EvenComponent } from './assignments/game-control/even/even.component';
import { ControlComponent } from './assignments/game-control/control/control.component';
import { DirectivesDeepDiveComponent } from './directives-deep-dive/directives-deep-dive.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';


const appRoutes: Routes = [
    { path: 'server', component: ServerComponent },
    { path: 'databinding', component: DatabindingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DatabindingComponent,
    HeaderComponent,
    PracticeDirectivesComponent,
    CookbookComponent,
    ShoppingComponent,
    RecipesComponent,
    HeaderCookbookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CockpitComponent,
    ServerElementComponent,
    AssignmentsComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    ControlComponent,
    DirectivesDeepDiveComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
