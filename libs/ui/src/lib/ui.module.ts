import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MenuComponent, LandingPageComponent, HeaderComponent, DisplayComponent],
  exports: [MenuComponent, LandingPageComponent, HeaderComponent, DisplayComponent],
})
export class UiModule {}
