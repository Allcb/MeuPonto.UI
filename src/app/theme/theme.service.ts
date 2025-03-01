import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private chaveTema = 'user-theme';
  public eModoEscuro = false;

  public definirTemaEscuro(isDark: boolean): void {
    this.eModoEscuro = isDark;
    this.definirTema();
  }

  public carregarTema(): void {
    if (typeof localStorage !== 'undefined') {
      const savedTheme = localStorage.getItem(this.chaveTema) || 'light-theme';
      this.eModoEscuro = savedTheme === 'dark-theme';
      this.definirTema();
    }
  }

  public toggleTheme(): void {
    this.eModoEscuro = !this.eModoEscuro;
    this.definirTema();
  }

  public verificarModoEscuro(): boolean {
    return this.eModoEscuro;
  }

  private definirTema(): void {
    const body = document.body;
    if (this.eModoEscuro) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.chaveTema, this.eModoEscuro ? 'dark-theme' : 'light-theme');
    }
  }
}
