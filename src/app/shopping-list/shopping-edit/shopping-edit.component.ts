import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addClicked = new EventEmitter<Ingredient>();
  @Output() deleteClicked = new EventEmitter<string>();
  @Output() clearClicked = new EventEmitter();

  @ViewChild('name', {static: false}) nameRef: ElementRef;
  @ViewChild('amount', {static: false}) amountRef: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  onAddClicked() {
    const name = this.nameRef.nativeElement.value as string;
    const amount = this.amountRef.nativeElement.value as number;

    this.addClicked.emit({name, amount});
  }

  onDeleteClicked() {
    const name = this.nameRef.nativeElement.value as string;

    this.deleteClicked.emit(name);
  }

  onClearClicked() {
    this.clearClicked.emit();
  }

}
