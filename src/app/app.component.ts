import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    // tslint:disable-next-line: ban-types
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      const navEndEvents$ = this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd)
      );

      navEndEvents$.subscribe((event: NavigationEnd) => {
        gtag('config', 'G-L6B4H683FT', {
          page_path: event.urlAfterRedirects,
          page_title: event.urlAfterRedirects,
        });
      });
    }
  }
}
