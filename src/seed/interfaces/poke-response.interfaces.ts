export interface PokeResponse {
  count: number;
  next: string;
  previous: null;
  results: pokemon[];
}

export interface pokemon {
  name: string;
  url: string;
}
