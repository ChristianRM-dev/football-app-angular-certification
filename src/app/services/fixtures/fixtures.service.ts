import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiResponseWrapper } from 'src/app/models/api-response.model';
import {  FixtureResponse } from 'src/app/models/fixtures/fixture.model';

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

    const queryParams = new URLSearchParams(params);
   // const url = `/fixtures?${queryParams}`;
   const url = 'assets/data/fixtures.json';
    return this.http.get<ApiResponseWrapper<FixtureResponse[]>>(url).pipe(
      map((response)=>response.response)
    );
  }
}
