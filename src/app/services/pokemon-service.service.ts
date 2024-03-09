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

  constructor(private toastService: ToastService,private apiServive:ApiService) {
    this.getPokemon().subscribe((pokemons:Pokemon[])=>{
      this.pokemons=pokemons
    });
  }
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
    this.apiServive.postPokemom(newpokemon).subscribe((res:PostResponse)=>{
      this.getPokemon()
    })
    this.toastService.show('Pokémon ajouté',`Le Pokémon ${name} a été ajouté`);
  }

  deletePokemon(pokemon: Pokemon) {
    const indexToDelete = this.pokemons.findIndex(currentPokemon => currentPokemon.id === pokemon.id);
    if (indexToDelete < 0) return; // ça ne devrait pas arriver
    this.pokemons.splice(indexToDelete, 1);
    this.toastService.show('Pokémon supprimé',`Le Pokémon ${pokemon.name} a été supprimé`);
  }
  updatePokemon(pokemon: Pokemon) {
    this.apiServive.patchPokemom(pokemon).subscribe((res:any)=>{
      console.log(res);
    });
    // const indexToDelete = this.pokemons.findIndex(currentPokemon => currentPokemon.id === pokemon.id);
    // if (indexToDelete < 0) return; // ça ne devrait pas arriver
    // this.pokemons.splice(indexToDelete, 1);
    this.toastService.show('Pokémon modifié',`Le Pokémon ${pokemon.name} a été modifié`);
  }
}
