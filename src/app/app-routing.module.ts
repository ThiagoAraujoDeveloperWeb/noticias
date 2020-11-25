import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListNewsComponent } from './list-news/list-news.component';
import { HomeComponent } from './home/home.component';
import { ShowNewsComponent } from './show-news/show-news.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'list-news', component: ListNewsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'show-news', component: ShowNewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
