import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UiModule } from '@eichfx/ui'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, UiModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
