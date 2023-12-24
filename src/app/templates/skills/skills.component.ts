import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as technologies from './data/tecnologies.json';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  technologies: any[] = [];
  softSkills: any[] = [
    {
      name: 'Teamwork',
      imgUrl: './../../../assets/tecnologies/teamwork.png',
    },
    {
      name: 'Teamwork',
      imgUrl: './../../../assets/tecnologies/teamwork.png',
    },
    {
      name: 'Teamwork',
      imgUrl: './../../../assets/tecnologies/teamwork.png',
    },
  ];

  constructor(public translate: TranslateService) {
    this.technologies = Object.values(technologies);
  }

  ngOnInit(): void {}
}
