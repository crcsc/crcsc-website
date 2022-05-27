import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { AutoScrollComponent } from './auto-scroll/auto-scroll.component';
import { HomeComponent } from './home/home.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { SocialComponent } from './home/social/social.component';
import { ActivitiesComponent } from './home/activities/activities.component';
import { OfficersComponent } from './home/officers/officers.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AutoScrollComponent,
    HomeComponent,
    MeetingsComponent,
    WelcomeComponent,
    SocialComponent,
    ActivitiesComponent,
    OfficersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
