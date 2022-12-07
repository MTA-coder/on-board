import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { SeoSocialShareData, SeoSocialShareService } from 'ngx-seo';
import { filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouteHelper {

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly seoSocialShareService: SeoSocialShareService
  ) { }

  setupRouting() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter(route => route.outlet === 'primary')
    ).subscribe((route: ActivatedRoute) => {
      const seo: SeoSocialShareData = route.snapshot.data['seo'];
      // set your meta tags & title here
      this.seoSocialShareService.setData(seo);
    });
  }

}
