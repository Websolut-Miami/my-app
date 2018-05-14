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
    PracticeDirectivesComponent
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
