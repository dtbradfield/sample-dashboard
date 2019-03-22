import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidebar/sidenav/sidenav.component';
import { SidenavEl1Component } from './sidebar/sidenav-el1/sidenav-el1.component';
import { SidenavEl2Component } from './sidebar/sidenav-el2/sidenav-el2.component';
import { SidenavEl3Component } from './sidebar/sidenav-el3/sidenav-el3.component';
import { ActionNavComponent } from './topbar/action-nav/action-nav.component';
import { ActionNavEl1Component } from './topbar/action-nav-el1/action-nav-el1.component';
import { ActionNavEl2Component } from './topbar/action-nav-el2/action-nav-el2.component';
import { ActionNavEl3Component } from './topbar/action-nav-el3/action-nav-el3.component';
import { WelcomeComponent } from './main/welcome/welcome.component';
import { MainEl1Component } from './main/main-el1/main-el1.component';
import { MainEl2Component } from './main/main-el2/main-el2.component';
import { LandingComponent } from './main/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SidenavEl1Component,
    SidenavEl2Component,
    SidenavEl3Component,
    ActionNavComponent,
    ActionNavEl1Component,
    ActionNavEl2Component,
    ActionNavEl3Component,
    WelcomeComponent,
    MainEl1Component,
    MainEl2Component,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
