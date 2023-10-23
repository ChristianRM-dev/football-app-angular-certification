import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { League } from 'app/models/league/league.model';
import { Standing } from 'app/models/standings/standings-response.model';
import { LeagueService } from 'app/services/league/league.service';
import { StandingsService } from 'app/services/standings/standings.service';

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

  onLeagueChange(league:League):void{
    this.leagueService.setSelectedLeague(league)
  }
}
