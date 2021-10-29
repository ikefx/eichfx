import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { DisplayComponent } from './display/display.component';
import { BreakdownComponent } from './breakdown/breakdown.component';
import { ResearchComponent } from './research/research.component';
import { ContentComponent } from './breakdown/components/content/content.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    MenuComponent,
    LandingPageComponent,
    HeaderComponent,
    DisplayComponent,
    BreakdownComponent,
    ResearchComponent,
    ContentComponent,
  ],
  exports: [
    MenuComponent,
    LandingPageComponent,
    HeaderComponent,
    DisplayComponent,
    BreakdownComponent,
    ResearchComponent,
  ],
})
export class EichfxUiModule {}
