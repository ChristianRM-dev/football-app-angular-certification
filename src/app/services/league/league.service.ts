import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Constants } from 'app/core/config/constants';
import { League } from 'app/models/league/league.model';

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
