import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipesService {
  private _recipes = [
    new Recipe(
      'Recipe A',
      'This is Recipe A',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('A', 1),
        new Ingredient('B', 2),
      ]),
    new Recipe('Recipe B',
      'This is Recipe B',
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg',
      [
        new Ingredient('C', 3),
        new Ingredient('D', 4),
      ]),
    new Recipe('Recipe C',
      'This is Recipe C',
      'https://cdn.pixabay.com/photo/2017/09/17/23/21/gastronomy-2760200_960_720.jpg',
      [
        new Ingredient('E', 5),
        new Ingredient('F', 6),
      ]),
  ];

  get recipes(): Recipe[] {
    return this._recipes;
  }

  private _recipeSelected = new EventEmitter<Recipe>();

  get recipeSelected(): EventEmitter<Recipe> {
    return this._recipeSelected;
  }
}
