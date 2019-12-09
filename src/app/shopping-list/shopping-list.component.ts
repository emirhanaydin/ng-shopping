import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 15),
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onAddClicked(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  onDeleteClicked(name: string) {
    const index = this.ingredients.findIndex(value => value.name === name);
    if (index < 0) {
      return;
    }

    this.ingredients.splice(index, 1);
  }

  onClearClicked() {
    this.ingredients = [];
  }

}
