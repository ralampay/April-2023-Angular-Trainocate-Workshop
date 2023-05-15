import { Component } from '@angular/core';
import { Position } from 'src/app/interfaces/position';
import { PositionsService } from 'src/app/services/positions.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  isDisplay: boolean = false;
  positions: Position[] = [];

  constructor(private positionService: PositionsService) {}

  ngOnInit(): void {
    this.positionService.getAll().subscribe((positions) => {
      this.positions = positions;
    })
  }

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

    position.id = 7;
    this.positions.push(position);
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
