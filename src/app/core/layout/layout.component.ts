import { Component, inject, OnInit } from '@angular/core';
import { ThemeService } from '../../theme/theme.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared/modules/material.module';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class LayoutComponent implements OnInit {
  private router = inject(Router);
  private authService = inject(AuthService);
  private themeService = inject(ThemeService);

  public isSidebarCollapsed = true;
  public currentYear = new Date().getFullYear();
  public eModoEscuro = false;
  public openSubMenus: string[] = [];

  ngOnInit(): void {
    this.eModoEscuro = this.themeService.verificarModoEscuro();
  }

  public toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  public toggleTheme(): void {
    this.themeService.toggleTheme();
    this.eModoEscuro = this.themeService.verificarModoEscuro();
  }

  public toggleSubMenu(menu: string): void {
    if (this.isSubMenuOpen(menu)) {
      this.openSubMenus = this.openSubMenus.filter(m => m !== menu);
    } else {
      this.openSubMenus.push(menu);
    }
  }

  public isSubMenuOpen(menu: string): boolean {
    return this.openSubMenus.includes(menu);
  }

  public onProfile(): void {
    console.log('Perfil clicado');
  }

  public onLogout(): void {
    this.authService.logout();

    this.router.navigate(['/login']);
  }
}
