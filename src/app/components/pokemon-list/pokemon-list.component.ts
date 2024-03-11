import { Component } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon-service.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  currentPokemonName = '';
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService,private authService:AuthService) {
    this.getPokemon();
  }

  onCreatePokemon() {
    this.pokemonService.addPokemon(this.currentPokemonName);
    this.currentPokemonName = ''; 
    this.getPokemon();
  }

  onDeletePokemon(pokemon: Pokemon) {
    this.pokemonService.deletePokemon(pokemon);
    this.getPokemon();
  }
  getPokemon(){
  this.pokemonService.getPokemon()
    .subscribe((pokemons:Pokemon[])=>{
      this.pokemons=pokemons
    });
  }
  logout(){
    this.authService.SignOut();
  }
}
