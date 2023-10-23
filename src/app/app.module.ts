import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FootBallInterceptor } from './core/interceptors/foot-ball.interceptor';

import { AppComponent } from './app.component';
import { SelectCountryComponent } from './components/select-country/select-country.component';
import { HomeComponent } from './components/home/home.component';
import { StandingsComponent } from './components/standings/standings.component';
import { TeamResultsComponent } from './components/team-results/team-results.component';

import { HttpCacheInterceptorModule } from '@ngneat/cashew';

@NgModule({
  declarations: [
    AppComponent,
    SelectCountryComponent,
    HomeComponent,
    StandingsComponent,
    TeamResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpCacheInterceptorModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FootBallInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
