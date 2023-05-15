import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { MainComponent } from './components/main/main.component';
import { PositionDisplayComponent } from './ui/position-display/position-display.component';
import { NotificationModalComponent } from './components/notification-modal/notification-modal.component';
import { PositionFormComponent } from './components/position-form/position-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    PositionDisplayComponent,
    NotificationModalComponent,
    PositionFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
