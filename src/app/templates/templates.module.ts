import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ProjectsAndBlogsComponent } from './projects-and-blogs/projects-and-blogs.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ClipboardModule } from 'ngx-clipboard';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    LandingPageComponent,
    AboutMeComponent,
    SkillsComponent,
    ExperienceComponent,
    HobbiesComponent,
    ProjectsAndBlogsComponent,
    ContactMeComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ClipboardModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    LandingPageComponent,
    AboutMeComponent,
    SkillsComponent,
    ExperienceComponent,
    HobbiesComponent,
    ProjectsAndBlogsComponent,
    ContactMeComponent,
  ],
})
export class TemplatesModule {}
