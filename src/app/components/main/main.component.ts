import { Component } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  isDisplay: boolean = false;
  positions: any[] = [
    { id: 1, name: "Position 1" },
    { id: 2, name: "Position 2" },
    { id: 3, name: "Position 3" },
    { id: 4, name: "Position 4" },
    { id: 5, name: "Position 5" },
  ];

  toggle(): void {
    console.log("toggle() invoked");
    this.isDisplay = !this.isDisplay;
  }
}
