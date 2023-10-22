import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { StandingsResponse } from '../../models/standings/standings-response.model';

@Injectable({
  providedIn: 'root',
})
export class StandingsService {
  constructor(private http: HttpClient) {}

  getLeagueStandings(league: number): Observable<StandingsResponse> {
    const season: number = new Date().getFullYear();
    const params = {
      league: `${league}`,
      season: `${season}`,
    };

    const queryParams = new URLSearchParams(params);

    return this.http.get<StandingsResponse>(`/standings?${queryParams}`);
  }
}
