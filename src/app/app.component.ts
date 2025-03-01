import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedModule } from './shared/shared.module';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SharedModule
  ],
  template: `
    <router-outlet></router-outlet>
  `,
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
