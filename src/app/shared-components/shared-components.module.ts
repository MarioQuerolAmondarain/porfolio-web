import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NavarComponent } from './navar/navar.component';

@NgModule({
  declarations: [NavarComponent],
  imports: [CommonModule, TranslateModule],
  exports: [NavarComponent],
})
export class SharedComponentsModule {}
