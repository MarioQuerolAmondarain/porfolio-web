import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [LandingPageComponent, AboutMeComponent],
  imports: [CommonModule, TranslateModule],
  exports: [LandingPageComponent, AboutMeComponent],
})
export class TemplatesModule {}
