import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name', {static: false}) nameRef: ElementRef;
  @ViewChild('amount', {static: false}) amountRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  onAddClicked() {
    const name = this.nameRef.nativeElement.value as string;
    const amount = this.amountRef.nativeElement.value as number;

    this.shoppingListService.addIngredient(new Ingredient(name, amount));
  }

  onDeleteClicked() {
    const name = this.nameRef.nativeElement.value as string;

    this.shoppingListService.removeIngredient(name);
  }

  onClearClicked() {
    this.shoppingListService.clearIngredients();
  }

}
