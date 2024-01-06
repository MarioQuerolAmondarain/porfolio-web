import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ProjectsAndBlogsComponent } from './projects-and-blogs/projects-and-blogs.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    AboutMeComponent,
    SkillsComponent,
    ExperienceComponent,
    HobbiesComponent,
    ProjectsAndBlogsComponent,
  ],
  imports: [CommonModule, TranslateModule],
  exports: [
    LandingPageComponent,
    AboutMeComponent,
    SkillsComponent,
    ExperienceComponent,
    HobbiesComponent,
    ProjectsAndBlogsComponent,
  ],
})
export class TemplatesModule {}
