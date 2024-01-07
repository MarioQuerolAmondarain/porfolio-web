import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent {
  constructor(
    public translate: TranslateService,
    private toastr: ToastrService
  ) {}

  showToaster() {
    this.toastr.success('Copied to clipboard', undefined, {
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
    });
  }
}
