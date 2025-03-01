import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './core/layout/layout.component';
import { LoginComponent } from './features/auth/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', title: 'Dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard] },
      { path: '**', loadChildren: () => import('./features/error/error.module').then(m => m.ErrorModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
