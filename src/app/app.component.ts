import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private swUpdate: SwUpdate) {
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
  ngOnInit(): void {
    this.updatePWA();
  }
  updatePWA(): void {
    this.swUpdate.available.subscribe((value) => {
      console.log('update', value);
      window.location.reload();
    });
  }
}
