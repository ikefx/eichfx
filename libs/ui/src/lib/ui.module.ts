import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MenuComponent, LandingPageComponent, HeaderComponent],
  exports: [MenuComponent, LandingPageComponent, HeaderComponent],
})
export class UiModule {}
