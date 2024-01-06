import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects-and-blogs',
  templateUrl: './projects-and-blogs.component.html',
  styleUrls: ['./projects-and-blogs.component.scss'],
})
export class ProjectsAndBlogsComponent implements OnInit {
  // Proyect example
  // {
  //   title: 'Mi portfolio',
  //   subtitle: 'Web personal',
  //   description: 'Proyecto personal para mostrar mi portfolio',
  //   image: './../../../assets/projects/office.jpg',
  //   link: 'https://www.helloworld-school.com/blog/del-aula-a-la-oficina-consejos-y-experiencia-de-un-junior',
  //   technologies: [
  //     {
  //       name: 'Angular',
  //       image: './../../../assets/tecnologies/angular.svg',
  //     },
  //     {
  //       name: 'NodeJS',
  //       image: './../../../assets/tecnologies/api.png',
  //     },
  //     {
  //       name: 'MongoDB',
  //       image: './../../../assets/tecnologies/git.png',
  //     },
  //   ],
  // },
  projects: any[] = [];
  blogs: any[] = [
    {
      title: 'BLOGS.LIST.CLASSROOM_TO_OFFICE.TITLE',
      subtitle: 'BLOGS.LIST.CLASSROOM_TO_OFFICE.SUBTITLE',
      description: 'BLOGS.LIST.CLASSROOM_TO_OFFICE.DESCRIPTION',
      image: './../../../assets/projects/office.jpg',
      link: 'https://www.helloworld-school.com/blog/del-aula-a-la-oficina-consejos-y-experiencia-de-un-junior',
    },
    {
      title: 'BLOGS.LIST.CLEAN_GIT.TITLE',
      subtitle: 'BLOGS.LIST.CLEAN_GIT.SUBTITLE',
      description: 'BLOGS.LIST.CLEAN_GIT.DESCRIPTION',
      image: './../../../assets/projects/clean-git.png',
      link: 'https://www.helloworld-school.com/blog/clean-git',
    },
  ];

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}
}
