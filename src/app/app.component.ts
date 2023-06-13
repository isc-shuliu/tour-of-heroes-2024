import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(private matBottomSheet: MatBottomSheet, public messageService: MessageService) {}

  openBottomSheet(): void {
    this.matBottomSheet.open(MessagesComponent);
  }
}
