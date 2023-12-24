import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [LandingPageComponent, AboutMeComponent, SkillsComponent],
  imports: [CommonModule, TranslateModule],
  exports: [LandingPageComponent, AboutMeComponent, SkillsComponent],
})
export class TemplatesModule {}
