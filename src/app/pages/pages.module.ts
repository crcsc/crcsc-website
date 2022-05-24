import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { MeetingsComponent } from './meetings/meetings.component';

/**
 * The Pages Module is a package of angular components representing full web pages 
 * that are accessed through the router and only need to be added to the application once.
 */

@NgModule({
  declarations: [
    HomeComponent,
    MeetingsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    MeetingsComponent
  ]
})
export class PagesModule { }
