import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    // tslint:disable-next-line: ban-types
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      iconRegistry.addSvgIcon(
        'youtube',
        sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/svg/youtube.svg')
      );
      iconRegistry.addSvgIcon(
        'platzi',
        sanitizer.bypassSecurityTrustResourceUrl('assets/svg/Platzi.svg')
      );
      iconRegistry.addSvgIcon(
        'twitter',
        sanitizer.bypassSecurityTrustResourceUrl('assets/svg/twitter.svg')
      );
    }
  }

  ngOnInit(): void {}
}
