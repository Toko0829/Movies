import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { FavoritesScreenComponent } from './favorites-screen/favorites-screen.component';
import { TrendingDashboardComponent } from './trending-dashboard/trending-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    HomeScreenComponent,
    FavoritesScreenComponent,
    TrendingDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
