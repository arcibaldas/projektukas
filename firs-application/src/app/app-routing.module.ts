import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PeopleListComponent} from './people-list/people-list.component';

const routes: Routes = [
  {path: 'About', component: AboutComponent},
  {path: 'PeopleList', component: PeopleListComponent},
  {path: '', redirectTo: '/About', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
