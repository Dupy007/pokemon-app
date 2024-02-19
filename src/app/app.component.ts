import { Component } from '@angular/core';
import { Pokemon, PokemonService } from './services/pokemon-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentPokemonName="";
  pokemons:Pokemon[]=this.pokemonService.pokemons;

  constructor(private pokemonService:PokemonService){}
  onAddPokemon(){
    this.pokemonService.addPokemon(this.currentPokemonName);
  }
  onDeletePokemon(index:number){
    this.pokemonService.deletePokemon(index)
  }
}
