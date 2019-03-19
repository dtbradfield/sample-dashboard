import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidenavEl1Component } from './sidebar/sidenav-el1/sidenav-el1.component';
import { SidenavEl2Component } from './sidebar/sidenav-el2/sidenav-el2.component';
import { SidenavEl3Component } from './sidebar/sidenav-el3/sidenav-el3.component';
import { LandingComponent } from './main/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'sidenav-el1', component: SidenavEl1Component },
  { path: 'sidenav-el2', component: SidenavEl2Component },
  { path: 'sidenav-el3', component: SidenavEl3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
