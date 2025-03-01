import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThemeService } from '../../../theme/theme.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/modules/material.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class LoginComponent implements OnInit {
  private rotas = inject(Router);
  private authService = inject(AuthService);
  private formBuilder = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  private themeService = inject(ThemeService);

  public eModoEscuro: boolean = false;
  public formulario: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(8)]]
  });

  ngOnInit(): void {
    this.eModoEscuro = this.themeService.verificarModoEscuro();
  }

  public onSubmit(): void {
    if (this.formulario.valid) {
      console.log('Form Submitted', this.formulario.value);
      // Simulação de login bem-sucedido
      this.snackBar.open('Login realizado com sucesso!', 'Fechar', {
        duration: 3000,
        panelClass: ['success-snackbar']
      });

      const fakeToken = 'fake-jwt-token';
      this.authService.login(fakeToken);
      this.rotas.navigate(['/dashboard']);

    } else {
      this.snackBar.open('Por favor, preencha o formulário corretamente.', 'Fechar', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
    }
  }

  public onForgotPassword(event: Event): void {
    event.preventDefault();
    this.snackBar.open('Funcionalidade em desenvolvimento.', 'Fechar', {
      duration: 3000,
    });
  }

  public onSignUp(event: Event): void {
    event.preventDefault();
    this.snackBar.open('Funcionalidade em desenvolvimento.', 'Fechar', {
      duration: 3000,
    });
  }

  public toggleTheme(): void {
    this.themeService.toggleTheme();
    this.eModoEscuro = this.themeService.verificarModoEscuro();
  }
}
