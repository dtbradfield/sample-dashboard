import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { FeedComponent } from './main/feed/feed.component';
import { ComposeNewMailComponent } from './main/compose-new-mail/compose-new-mail.component';
import { MailListComponent } from './main/mailbox/mail-list/mail-list.component';
import { MailItemComponent } from './main/mailbox/mail-item/mail-item.component';
import { SentMailListComponent } from './main/mailbox/sent-mail-list/sent-mail-list.component';
import { SentMailItemComponent } from './main/mailbox/sent-mail-item/sent-mail-item.component';
import { MailPreviewComponent } from './main/mailbox/mail-preview/mail-preview.component';
import { MainEl1Component } from './main/main-el1/main-el1.component';
import { MainEl2Component } from './main/main-el2/main-el2.component';
import { FooterComponent } from './footer/footer/footer.component';
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
    FeedComponent,
    ComposeNewMailComponent,
    MailListComponent,
    MailItemComponent,
    SentMailListComponent,
    SentMailItemComponent,
    MailPreviewComponent,
    MainEl1Component,
    MainEl2Component,
    FooterComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
