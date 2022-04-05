import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

export class Breadcrumb {
  label!: string;
  href!: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        let root = this.router.routerState.snapshot.root;
        let breadcrumbs: Breadcrumb[] = [];
        this.addBreadcrumb(root, breadcrumbs);
        this.breadcrumbs = breadcrumbs;
      });
  }

  private addBreadcrumb(
    route: ActivatedRouteSnapshot,
    breadcrumbs: Breadcrumb[]
  ): void {
    if (route) {
      if (route.data.breadcrumbs) {
        route.data.breadcrumbs.forEach((item: any) => {
          let breadcrumb: Breadcrumb = new Breadcrumb();
          breadcrumb.label =
            typeof item.label === 'function'
              ? item.label(route.data)
              : item.label;
          breadcrumb.href = item.href;

          breadcrumbs.push(breadcrumb);
        });
      }

      this.addBreadcrumb(route.firstChild!, breadcrumbs);
    }
  }

  goBack(): void {
    this.router.navigateByUrl(this.breadcrumbs[0].href!);
  }

  ngOnInit(): void {}
}
