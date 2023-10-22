import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { League } from 'src/app/models/league/league.model';

import { LeagueService } from 'src/app/services/league/league.service';

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.component.html',
  styleUrls: ['./select-country.component.scss'],
})
export class SelectCountryComponent implements OnInit, OnDestroy {
  selectedCountry: string;
  leagues: League[];
  private subscriptions: Subscription[];

  constructor(private leagueService: LeagueService) {
    this.leagues = this.leagueService.getLeagues();
    this.selectedCountry = '';
    this.subscriptions = [];

    this.subscriptions.push(
      this.leagueService.selectedLeague.subscribe(
        (league) => (this.selectedCountry = league.country)
      )
    );
  }

  ngOnInit(): void {}

  selectLeague(league: League) {
    this.leagueService.setSelectedLeague(league);
  }

  builCountryId(country: string): string {
    return `${country.toLocaleLowerCase()}Select`;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((x) => x.unsubscribe());
  }
}
