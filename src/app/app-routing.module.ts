import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MeetingsComponent } from './meetings/meetings.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'meetings', component: MeetingsComponent },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
