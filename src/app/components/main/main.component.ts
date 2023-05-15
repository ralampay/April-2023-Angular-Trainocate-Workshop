import { Component } from '@angular/core';
import { Position } from 'src/app/interfaces/position';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  isDisplay: boolean = false;
  positions: Position[] = [
    { id: 1, name: "Position 1" },
    { id: 2, name: "Position 2" },
    { id: 3, name: "Position 3" },
    { id: 4, name: "Position 4" },
    { id: 5, name: "Position 5" },
    { id: 6, name: "Position 6", description: "something" },
  ];

  position: Position = {
    name: "", 
    description: ""
  }

  toggle(): void {
    console.log("toggle() invoked");
    this.isDisplay = !this.isDisplay;
  }

  handleDeleteClicked(): void {
    console.log("handleDeleteClicked() invoked");
    this.positions.shift();
  }

  handlePositionSaved(position: Position) {
    console.log("Inside main component");
    console.log(position);
  }

  handleDelete(payload: any): void {
    console.log("handleDelete clicked");
    console.log(`Deleting item with ID: ${payload.id} NAME: ${payload.name}`);

    this.positions = this.positions.filter((position: any) => {
      if (position.id != payload.id) {
        return position;
      }
    })
  }
}
