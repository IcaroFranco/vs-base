import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [BreadcrumbComponent, BreadcrumbItemComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [BreadcrumbComponent, BreadcrumbItemComponent],
})
export class BreadcrumbModule {}
