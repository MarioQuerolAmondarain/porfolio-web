import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as technologies from './data/tecnologies.json';
import * as softSkills from './data/softskills.json';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  technologies: any[] = [];
  softSkills: any[] = [];

  constructor(public translate: TranslateService) {
    this.technologies = Object.values(technologies);
    this.softSkills = Object.values(softSkills);
  }

  ngOnInit(): void {}
}
