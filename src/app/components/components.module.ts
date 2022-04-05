import { CardModule } from './card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule
  ],
  exports:[
    CommonModule,
    CardModule
  ]
})
export class ComponentsModule { }
