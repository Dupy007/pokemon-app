import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tabs = ['Pokémons',"Login","register"];
  activeTabIndex = 0;

  selectTab(index: number) {
    this.activeTabIndex = index;
  }
}

