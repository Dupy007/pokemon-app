import { Injectable } from '@angular/core';
export type PokemonGender = "male" | "female";
export interface Pokemon{
  id:number;
  name:string;
  gender:PokemonGender;
}
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons:Pokemon[]=[];
  constructor() { }
  addPokemon(name:string){
    this.pokemons.push({
      id:this.pokemons.length,
      name,
      gender:Math.random()<0.5?"female":"male"
    });
  }
  deletePokemon(index:number){
    this.pokemons.splice(index,1);
  }
}
