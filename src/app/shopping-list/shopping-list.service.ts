import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  private _ingredients = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 15),
  ];

  get ingredients(): Ingredient[] {
    return this._ingredients.slice();
  }

  private _ingredientsChanged = new EventEmitter<Ingredient[]>();

  get ingredientsChanged(): EventEmitter<Ingredient[]> {
    return this._ingredientsChanged;
  }

  public addIngredient(ingredient: Ingredient) {
    this._ingredients.push(ingredient);

    this._ingredientsChanged.emit(this._ingredients);
  }

  public removeIngredient(name: string) {
    const index = this._ingredients.findIndex(value => value.name === name);
    if (index < 0) {
      return;
    }

    this._ingredients.splice(index, 1);

    this._ingredientsChanged.emit(this._ingredients);
  }

  public clearIngredients() {
    this._ingredients = [];

    this._ingredientsChanged.emit(this._ingredients);
  }
}
