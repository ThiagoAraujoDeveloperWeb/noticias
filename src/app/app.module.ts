import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListNewsComponent } from './list-news/list-news.component';
import { ShowNewsComponent } from './show-news/show-news.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListNewsComponent,
    ShowNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
