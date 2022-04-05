import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'vs-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.scss']
})
export class BreadcrumbItemComponent implements OnInit {
  @Input() href!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(): void {
    if (this.href) this.router.navigateByUrl(this.href);
  }
}
