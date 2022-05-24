import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent, MeetingsComponent } from './pages';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'meetings', component: MeetingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }