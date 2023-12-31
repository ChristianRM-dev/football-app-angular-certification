import { League } from "app/models/league/league.model";

export class Constants {
  static leagues: League[] = [
    {
      id: 39,
      name: 'Premier League',
      country: 'England',
      logo: 'https://media-4.api-sports.io/football/leagues/39.png',
      flag: 'https://media-4.api-sports.io/flags/gb.svg',
      season: 2023,
    },
    {
      id: 140,
      name: 'La Liga',
      country: 'Spain',
      logo: 'https://media-4.api-sports.io/football/leagues/140.png',
      flag: 'https://media-4.api-sports.io/flags/es.svg',
      season: 2023,
    },
    {
      id: 61,
      name: 'Ligue 1',
      country: 'France',
      logo: 'https://media-4.api-sports.io/football/leagues/61.png',
      flag: 'https://media-4.api-sports.io/flags/fr.svg',
      season: 2023,
    },
    {
      id: 78,
      name: 'Bundesliga',
      country: 'Germany',
      logo: 'https://media-4.api-sports.io/football/leagues/78.png',
      flag: 'https://media-4.api-sports.io/flags/de.svg',
      season: 2023,
    },
    {
      id: 135,
      name: 'Serie A',
      country: 'Italy',
      logo: 'https://media-4.api-sports.io/football/leagues/135.png',
      flag: 'https://media-4.api-sports.io/flags/it.svg',
      season: 2023,
    },
  ];
}
