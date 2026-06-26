import { Routes } from '@angular/router';
import { AppShellComponent } from './shared/app-shell/app-shell.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth/login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then(
        m => m.LoginComponent
      )
  },
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: 'admin/dashboard',
        loadComponent: () =>
          import('./features/admin/admin-dashboard/admin-dashboard.component').then(
            m => m.AdminDashboardComponent
          )
      },
      {
        path: 'admin/pacientes',
        loadComponent: () =>
          import('./features/admin/pacientes/pacientes.component').then(
            m => m.PacientesComponent
          )
      },
      {
        path: 'admin/medicos',
        loadComponent: () =>
          import('./features/admin/medicos/medicos.component').then(
            m => m.MedicosComponent
          )
      },
      {
        path: 'admin/citas',
        loadComponent: () =>
          import('./features/citas/citas.component').then(
            m => m.CitasComponent
          )
      },
      {
        path: 'medico/dashboard',
        loadComponent: () =>
          import('./features/medico/medico-dashboard/medico-dashboard.component').then(
            m => m.MedicoDashboardComponent
          )
      },
      {
        path: 'medico/agenda',
        loadComponent: () =>
          import('./features/medico/agenda-medico/agenda-medico.component').then(
            m => m.AgendaMedicoComponent
          )
      },
      {
        path: 'medico/expediente',
        loadComponent: () =>
          import('./features/expedientes/expediente/expediente.component').then(
            m => m.ExpedienteComponent
          )
      },
      {
        path: 'paciente/dashboard',
        loadComponent: () =>
          import('./features/paciente/paciente-dashboard/paciente-dashboard.component').then(
            m => m.PacienteDashboardComponent
          )
      },
      {
        path: 'paciente/historial',
        loadComponent: () =>
          import('./features/paciente/historial-paciente/historial-paciente.component').then(
            m => m.HistorialPacienteComponent
          )
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];