import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloComponent } from './titulo.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [TituloComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [TituloComponent],
})
export class TituloModule {}
