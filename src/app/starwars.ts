export interface Starwars {
  count: number;
  next: string | null;
  previous: string | null;
  results: [];
}

export interface Starship {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  films: [];
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: [];
  starship_class: string;
  url: string;
}

export interface Pilot {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: [];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  skin_color: string;
  species: [];
  starships: [];
  url: string;
  vehicles: [];
  name: string;
}
