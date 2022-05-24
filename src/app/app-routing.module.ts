import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent, MeetingsComponent } from './pages';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: ''},
  { path: 'meetings', component: MeetingsComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
