import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedNav: string;
  title = 'shopping';

  onNavSelected(nav: string) {
    this.selectedNav = nav;
  }
}
