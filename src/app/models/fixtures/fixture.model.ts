export interface FixtureResponse {
  fixture: Fixture;
  league: League;
  teams: Teams;
  goals: Goals;
  score: Score;
}

interface Fixture {
  id: number;
  referee: null;
  timezone: string;
  date: Date;
  timestamp: number;
  periods: Periods;
  venue: Venue;
  status: Status;
}

interface Periods {
  first: number;
  second: null;
}

interface Status {
  long: string;
  short: string;
  elapsed: number;
}

interface Venue {
  id: number;
  name: string;
  city: string;
}

interface Teams {
  home: AwayClass;
  away: AwayClass;
}

interface Goals {
  home: number;
  away: number;
}

interface AwayClass {
  id: number;
  name: string;
  logo: string;
  winner: boolean;
}

interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

interface Score {
  halftime: Goals;
  fulltime: Goals;
  extratime: Goals;
  penalty: Goals;
}
