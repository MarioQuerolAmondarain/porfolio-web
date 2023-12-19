import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navar',
  templateUrl: './navar.component.html',
  styleUrls: ['./navar.component.scss'],
})
export class NavarComponent implements OnInit {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');

    translate.use('es');
  }

  ngOnInit(): void {}
}
