import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'position-display',
  templateUrl: './position-display.component.html',
  styleUrls: ['./position-display.component.scss']
})
export class PositionDisplayComponent {
  @Input() id: number | undefined;
  @Input() name: string = "";
  @Input() description: string | undefined;
  @Input() categoryId: number | undefined;

  @Output() deleteEvent: EventEmitter<any> = new EventEmitter<any>();

  handleDelete(): void {
    console.log("Handle delete called");

    this.deleteEvent.emit({ id: this.id, name: this.name });
  }
}
