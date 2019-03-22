import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidenavEl1Component } from './sidebar/sidenav-el1/sidenav-el1.component';
import { SidenavEl2Component } from './sidebar/sidenav-el2/sidenav-el2.component';
import { SidenavEl3Component } from './sidebar/sidenav-el3/sidenav-el3.component';
import { LandingComponent } from './main/landing/landing.component';
import { ActionNavEl1Component } from './topbar/action-nav-el1/action-nav-el1.component';
import { ActionNavEl2Component } from './topbar/action-nav-el2/action-nav-el2.component';
import { ActionNavEl3Component } from './topbar/action-nav-el3/action-nav-el3.component';
import { MainEl1Component } from './main/main-el1/main-el1.component';
import { MainEl2Component } from './main/main-el2/main-el2.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'sidenav-el1', component: SidenavEl1Component },
  { path: 'sidenav-el2', component: SidenavEl2Component },
  { path: 'sidenav-el3', component: SidenavEl3Component },
  { path: 'action-nav-el1', component: ActionNavEl1Component },
  { path: 'action-nav-el2', component: ActionNavEl2Component },
  { path: 'action-nav-el3', component: ActionNavEl3Component },
  { path: 'main-el1', component: MainEl1Component },
  { path: 'main-el2', component: MainEl2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
