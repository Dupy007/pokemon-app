import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent {
  @Input() pokemon?: Pokemon;
  @Input() hideDeleteButton = false;
  @Output() onDelete = new EventEmitter();

  onDeleteClick() {
    this.onDelete.emit();
  }
}
