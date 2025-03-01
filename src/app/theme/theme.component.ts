import { Component, inject } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent {

  private themeService = inject(ThemeService);
  private eModoEscuro = false;

  public toggleTheme(): void {
    this.themeService.toggleTheme();
    this.eModoEscuro = this.themeService.eModoEscuro;
  }

}
