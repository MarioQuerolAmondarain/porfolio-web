import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavarComponent } from './navar/navar.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field'; // Added import
import { MatInputModule } from '@angular/material/input'; // Added import
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavarComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  exports: [NavarComponent],
})
export class SharedComponentsModule {}
