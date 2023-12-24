import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { gsap } from 'gsap';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    gsap.from('.animation', {
      stagger: 1,
      opacity: 0,
      duration: 3,
      y: -50,
      ease: 'ease-in',
    });
  }
}
