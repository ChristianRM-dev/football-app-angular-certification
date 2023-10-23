import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiResponseWrapper } from '../../models/api-response.model';
import { FixtureResponse } from '../../models/fixtures/fixture.model';
import { withCache } from '@ngneat/cashew';

@Injectable({
  providedIn: 'root',
})
export class FixturesService {
  constructor(private http: HttpClient) {}

  getFixtures(team: number, last: number): Observable<FixtureResponse[]> {
    const params = {
      team: `${team}`,
      last: `${last}`,
    };

    const url = `/fixtures`;
    return this.http
      .get<ApiResponseWrapper<FixtureResponse[]>>(url, withCache(params))
      .pipe(map((response) => response.response));
  }
}
