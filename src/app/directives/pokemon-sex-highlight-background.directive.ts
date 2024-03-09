import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { PokemonSex } from '../models/pokemon';

@Directive({
  selector: '[appPokemonSexHighlightBackground]'
})
export class PokemonSexHighlightBackgroundDirective {
  @Input('appPokemonSexHighlightBackground') sex?: PokemonSex;
  defaultColor?: string;
  highlightColor?: string;

  @HostBinding('style.backgroundColor') backgroundColor?: string;
  @HostBinding('style.color') color?: string;

  ngOnInit(): void {
    this.defaultColor = this.sex === 'male' ? 'blue' : 'pink';
    this.highlightColor = this.sex === 'male' ? 'darkblue' : 'plum';
    this.color = this.sex === 'male' ? 'white' : 'black';
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') onMouseEnter(_eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(_eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }

}
