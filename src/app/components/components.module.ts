import { DialogModule } from './dialog/dialog.module';
import { CardModule } from './card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    DialogModule
  ],
  exports:[
    CommonModule,
    CardModule,
    DialogModule
  ]
})
export class ComponentsModule { }
