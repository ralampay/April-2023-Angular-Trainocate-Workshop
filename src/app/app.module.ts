import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { MainComponent } from './components/main/main.component';
import { PositionDisplayComponent } from './ui/position-display/position-display.component';
import { NotificationModalComponent } from './components/notification-modal/notification-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    PositionDisplayComponent,
    NotificationModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
