import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  events = [
    {
      name: 'EXPERIENCE.EDUCATION.TITLE',
      date: 'EXPERIENCE.EDUCATION.DATE',
      description: 'EXPERIENCE.EDUCATION.DESCRIPTION',
    },
    {
      name: 'EXPERIENCE.ANGULAR_BOOTCAMP.TITLE',
      date: 'EXPERIENCE.ANGULAR_BOOTCAMP.DATE',
      description: 'EXPERIENCE.ANGULAR_BOOTCAMP.DESCRIPTION',
    },
    {
      name: 'EXPERIENCE.DEVDEL.TITLE',
      date: 'EXPERIENCE.DEVDEL.DATE',
      description: 'EXPERIENCE.DEVDEL.DESCRIPTION',
    },
  ];
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}
}
