import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ServersComponent } from './servers/servers.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PracticeDirectivesComponent } from './practice-directives/practice-directives.component';

const routes: Routes = [
  { path: 'servers', component: ServersComponent },
  { path: 'databinding', component: DatabindingComponent }
  { path: 'practice-directives', component: PracticeDirectivesComponent }
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