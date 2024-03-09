import { Component } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  currentPokemonName = '';
  pokemons: Pokemon[] = this.pokemonService.pokemons;

  constructor(private pokemonService: PokemonService) {
    this.getPokemon();
  }

  onCreatePokemon() {
    this.pokemonService.addPokemon(this.currentPokemonName);
    this.currentPokemonName = ''; // On vide l'input
  }

  onDeletePokemon(pokemon: Pokemon) {
    this.pokemonService.deletePokemon(pokemon);
  }
  getPokemon(){
  this.pokemonService.getPokemon()
    .subscribe((pokemons:Pokemon[])=>{
      this.pokemons=pokemons
    });
  }
}
