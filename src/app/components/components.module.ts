import { TituloModule } from './titulo/titulo.module';
import { ChipModule } from './chip/chip.module';
import { FiltroModule } from './filtro/filtro.module';
import { DialogModule } from './dialog/dialog.module';
import { CardModule } from './card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    DialogModule,
    FiltroModule,
    ChipModule,
    TituloModule
  ],
  exports:[
    CommonModule,
    CardModule,
    DialogModule,
    FiltroModule,
    ChipModule,
    TituloModule
  ]
})
export class ComponentsModule { }
