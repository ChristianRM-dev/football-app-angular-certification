import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { League } from 'src/app/models/league/league.model';

import {
  Standing,
  StandingsResponse,
} from 'src/app/models/standings/standings-response.model';
import { LeagueService } from 'src/app/services/league/league.service';
import { StandingsService } from 'src/app/services/standings/standings.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss'],
})
export class StandingsComponent implements OnInit, OnDestroy {
  standingsData$: Observable<Standing[]>;
  private subscriptions: Subscription[];

  constructor(
    private leagueService: LeagueService,
    private standingsService: StandingsService
  ) {
    this.standingsData$ = new Observable();
    this.subscriptions = [];

    this.standingsData$ = this.leagueService.selectedLeague.pipe(
      switchMap((league: League) =>
        this.standingsService.getLeagueStandings(league.id)
      ),
      map(
        (response: StandingsResponse) =>
          response.response[0].league.standings[0]
      )
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((x) => x.unsubscribe());
  }
}
