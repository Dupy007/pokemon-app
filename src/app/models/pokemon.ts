export type PokemonSex = 'male' | 'female';

export interface Pokemon {
  id: string;
  name: string;
  sex: PokemonSex;
}