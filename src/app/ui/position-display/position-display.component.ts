import { Component, Input } from '@angular/core';

@Component({
  selector: 'position-display',
  templateUrl: './position-display.component.html',
  styleUrls: ['./position-display.component.scss']
})
export class PositionDisplayComponent {
  @Input() id: string = "";
  @Input() name: string = "";
}
