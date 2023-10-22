import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Standing } from '../..//models/standings/standings-response.model';
import { LeagueService } from '../../services/league/league.service';
import { StandingsService } from '../../services/standings/standings.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss'],
})
export class StandingsComponent implements OnInit {
  standingsData$: Observable<Standing[]>;

  constructor(
    private leagueService: LeagueService,
    private standingsService: StandingsService
  ) {
    this.standingsData$ = new Observable();

    this.standingsData$ = this.leagueService.selectedLeague.pipe(
      switchMap((league) => this.standingsService.getLeagueStandings(league.id))
    );
  }

  ngOnInit(): void {}
}
