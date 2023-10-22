export interface LeagueResponse {
  league: League;
}

 interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: Array<Standing[]>;
}

export interface Standing {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: null | string;
  all: All;
  home: All;
  away: All;
  update: Date;
}

 interface All {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}

 interface Goals {
  for: number;
  against: number;
}

 interface Team {
  id: number;
  name: string;
  logo: string;
}
