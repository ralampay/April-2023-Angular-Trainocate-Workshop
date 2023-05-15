import { Component, Input } from '@angular/core';
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
}
