import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  LeagueResponse,
  Standing,
} from '../../models/standings/standings-response.model';
import { ApiResponseWrapper } from 'src/app/models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class StandingsService {
  private readonly standingsCache: LeagueResponse[];

  constructor(private http: HttpClient) {
    this.standingsCache = [];
  }

  getLeagueStandings(leagueId: number): Observable<Standing[]> {
    console.log(this.standingsCache);
    const index = this.standingsCache.findIndex(
      (x) => x.league.id === leagueId
    );
    const cacheExist = index != -1;

    if (cacheExist) {
      const cache = this.standingsCache[index];
      return from(cache.league.standings);
    } else {
      return this.makeLeagueStandingsRequest(leagueId);
    }
  }

  private makeLeagueStandingsRequest(leagueId: number): Observable<Standing[]> {
    const season: number = new Date().getFullYear();
    const params = {
      league: `${leagueId}`,
      season: `${season}`,
    };

    const queryParams = new URLSearchParams(params);

    const url = 'assets/data/standings.json';
    // const url = `/standings?${queryParams}`
    return this.http.get<ApiResponseWrapper<LeagueResponse[]>>(url).pipe(
      map((data) => {
        this.standingsCache.push(data.response[0]);
        return data.response[0].league.standings[0];
      })
    );
  }
}
