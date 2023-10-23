import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  LeagueResponse,
  Standing,
} from '../../models/standings/standings-response.model';
import { ApiResponseWrapper } from '../../models/api-response.model';
import { withCache } from '@ngneat/cashew';

@Injectable({
  providedIn: 'root',
})
export class StandingsService {
  private readonly standingsCache: LeagueResponse[];

  constructor(private http: HttpClient) {
    this.standingsCache = [];
  }

  getLeagueStandings(leagueId: number): Observable<Standing[]> {
    const season: number = new Date().getFullYear();
    const params = {
      league: `${leagueId}`,
      season: `${season}`,
    };

    const url = `/standings`;
    return this.http
      .get<ApiResponseWrapper<LeagueResponse[]>>(url, withCache(params))
      .pipe(map((data) => data.response[0].league.standings[0]));
  }
}
