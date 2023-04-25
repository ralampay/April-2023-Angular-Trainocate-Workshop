import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrls: ['./notification-modal.component.scss']
})
export class NotificationModalComponent {
  @Input() isDisplay: boolean = false;

  handleCloseClicked(): void {
    console.log("handleCloseClicked() invoked");
  }
}
