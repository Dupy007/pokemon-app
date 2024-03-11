import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { ToastService } from './toast.service';
import { ApiService, GetResponse, PostResponse } from './api.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: Pokemon[] = [];

  idIndex = 1;

  constructor(private toastService: ToastService,private apiServive:ApiService) {}
  getPokemon(){
    return this.apiServive.getPokemom()
    .pipe(map((val:GetResponse)=>{
      const pokemons:Pokemon[] = [];
      Object.entries(val).forEach(([id,pokemon])=>{
        pokemons.push({
          id: id,
          name:pokemon.name,
          sex: pokemon.sex,
        })
      })
      return pokemons
    }))
  }
  addPokemon(name: string) {
    const newpokemon:Pokemon ={
      id: ""+this.idIndex++,
      name,
      sex: Math.random() > 0.5 ? 'male' : 'female',
    }
    this.apiServive.postPokemom(newpokemon).subscribe()
    this.toastService.show('Pokémon ajouté',`Le Pokémon ${name} a été ajouté`);
  }

  deletePokemon(pokemon: Pokemon) {
    this.apiServive.deletePokemom(pokemon).subscribe();
    this.toastService.show('Pokémon supprimé',`Le Pokémon ${pokemon.name} a été supprimé`);
  }
}
