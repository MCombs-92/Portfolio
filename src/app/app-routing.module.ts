import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component'
import { HomeComponent} from './home/home/home.component'

import {AboutComponent } from './about/about.component'
import {ProjectsComponent} from './projects/projects.component'
import {SummaryComponent} from './summary/summary.component'

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},

  {path: 'about', component: AboutComponent },
  {path: 'projects', component: ProjectsComponent},
  {path: 'summary', component: SummaryComponent}
];

@NgModule({
  declarations: [],
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
