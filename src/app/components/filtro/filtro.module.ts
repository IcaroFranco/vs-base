import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroComponent } from './filtro.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [FiltroComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [FiltroComponent],
})
export class FiltroModule {}
