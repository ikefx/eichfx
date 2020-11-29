import { Component } from '@angular/core';

@Component({
  selector: 'eichfx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'EICHFX';
  activePane: any;

  activePaneReceived(e: any) {
    this.activePane = e;
    console.dir(this.activePane);
  }
}
