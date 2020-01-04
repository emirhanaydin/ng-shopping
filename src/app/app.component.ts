import { Component } from '@angular/core';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ShoppingListService]
})
export class AppComponent {
  selectedNav = 'recipe';
  title = 'shopping';

  onNavSelected(nav: string) {
    this.selectedNav = nav;
  }
}
