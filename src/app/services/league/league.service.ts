import { Injectable } from '@angular/core';

import { Constants } from '@core/config/constants';
import { League } from '@models/league/league.model';

import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class LeagueService {
  private readonly leagues: League[];
  private selectedLeague$: BehaviorSubject<League>;

  constructor() {
    this.leagues = Constants.leagues;
    this.selectedLeague$ = new BehaviorSubject<League>(this.leagues[0]);
  }

  getLeagues(): League[] {
    return this.leagues;
  }

  setSelectedLeague(league: League) {
    this.selectedLeague$.next(league);
  }

  get selectedLeague(): Observable<League> {
    return this.selectedLeague$.asObservable();
  }
}
