import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

import { Subscription } from 'rxjs';

import { League } from 'app/models/league/league.model';
import { LeagueService } from 'app/services/league/league.service';




@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.component.html',
  styleUrls: ['./select-country.component.scss'],
})
export class SelectCountryComponent implements OnInit, OnDestroy {
  selectedCountry: string;
  private subscriptions: Subscription[];
  leagues: League[];
  @Output() leagueChange: EventEmitter<League>;

  constructor(private leagueService: LeagueService) {
    this.leagues = this.leagueService.getLeagues();
    this.leagueChange = new EventEmitter<League>();
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
    this.leagueChange.emit(league);
    this.selectedCountry = league.country;
  }

  builCountryId(country: string): string {
    return `${country.toLocaleLowerCase()}Select`;
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((x) => x.unsubscribe());
  }
}
