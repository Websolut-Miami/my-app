import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ServersComponent } from './servers/servers.component';
import { DatabindingComponent } from './databinding/databinding.component';

const routes: Routes = [
  { path: 'servers', component: ServersComponent },
  { path: 'databinding', component: DatabindingComponent }
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