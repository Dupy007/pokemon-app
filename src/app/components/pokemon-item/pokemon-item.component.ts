import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../services/pokemon-service.service';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrl: './pokemon-item.component.css'
})
export class PokemonItemComponent {
@Input() pokemon?:Pokemon;
@Output() delete = new EventEmitter();
onDeletePokemon(){
  this.delete.emit();
}
}
