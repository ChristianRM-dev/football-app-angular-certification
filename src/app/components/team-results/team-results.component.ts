import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { FixtureResponse } from '../../models/fixtures/fixture.model';
import { FixturesService } from '../../services/fixtures/fixtures.service';

@Component({
  selector: 'app-team-results',
  templateUrl: './team-results.component.html',
  styleUrls: ['./team-results.component.scss'],
})
export class TeamResultsComponent implements OnInit {
  fixturesData$: Observable<FixtureResponse[]>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fixturesService: FixturesService
  ) {
    this.fixturesData$ = this.route.params.pipe(
      map((params) => Number(params.id)),
      switchMap((id: number) => this.fixturesService.getFixtures(id, 10)),
      catchError(() => {
        alert('Something went wrong 😥');
        return [];
      })
    );
  }

  ngOnInit(): void {}

  backToMainPage(): void {
    this.router.navigate(['/']);
  }
}
