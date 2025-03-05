import { Component, Inject, OnDestroy, PLATFORM_ID, } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThemeService } from './theme/theme.service';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  standalone: true,
  imports: [
    RouterModule
  ]
})
export class AppComponent implements OnDestroy {
  public showLayout: boolean = true;
  private routerSubscription?: Subscription;

  constructor(
    private router: Router,
    private themeService: ThemeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.themeService.carregarTema();
    if (isPlatformBrowser(this.platformId)) {
      this.routerSubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.showLayout = !['/login', '/cadastro'].includes(event.url);
        }
      });
    }
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
