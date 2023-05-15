import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { Position } from 'src/app/interfaces/position';

@Component({
  selector: 'app-position-form',
  templateUrl: './position-form.component.html',
  styleUrls: ['./position-form.component.scss']
})
export class PositionFormComponent {
  @Input() position: Position = {
    name: "",
    description: "",
  }

  categories: Category[] = [
    { id: 1, name: "Category A" },
    { id: 2, name: "Category B" }
  ]

  @Output() positionSaved: EventEmitter<Position> = new EventEmitter<Position>();

  handleSave(): void {
    console.log(this.position);

    const obj = {...this.position};

    this.positionSaved.emit(obj);

    this.position.name = "";
    this.position.description = "";
  }
}
