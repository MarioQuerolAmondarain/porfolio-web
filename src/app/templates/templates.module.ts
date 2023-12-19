import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [CommonModule, TranslateModule],
  exports: [LandingPageComponent],
})
export class TemplatesModule {}
