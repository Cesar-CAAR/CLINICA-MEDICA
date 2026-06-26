import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <main class="shell">
      <aside class="sidebar">
        <div class="logo">
          <div class="logo-icon">+</div>
          <div>
            <h2>CLINICA-MEDICA</h2>
            <span>Sistema de gestión médica</span>
          </div>
        </div>

        <p class="nav-section-title">Administración</p>
        <a class="nav-link" routerLink="/admin/dashboard" routerLinkActive="active">
          🏠 Panel general
        </a>
        <a class="nav-link" routerLink="/admin/pacientes" routerLinkActive="active">
          🧑‍🦱 Pacientes
        </a>
        <a class="nav-link" routerLink="/admin/medicos" routerLinkActive="active">
          🩺 Médicos
        </a>
        <a class="nav-link" routerLink="/admin/citas" routerLinkActive="active">
          📅 Citas
        </a>

        <p class="nav-section-title">Médico</p>
        <a class="nav-link" routerLink="/medico/dashboard" routerLinkActive="active">
          📋 Resumen médico
        </a>
        <a class="nav-link" routerLink="/medico/agenda" routerLinkActive="active">
          ⏰ Agenda del día
        </a>
        <a class="nav-link" routerLink="/medico/expediente" routerLinkActive="active">
          📁 Expediente clínico
        </a>

        <p class="nav-section-title">Paciente</p>
        <a class="nav-link" routerLink="/paciente/dashboard" routerLinkActive="active">
          📱 Portal paciente
        </a>
        <a class="nav-link" routerLink="/paciente/historial" routerLinkActive="active">
          💊 Historial y recetas
        </a>

        <p class="nav-section-title">Sesión</p>
        <a class="nav-link" routerLink="/auth/login">
          🚪 Cerrar sesión
        </a>
      </aside>

      <section class="content">
        <header class="topbar">
          <div>
            <h1>Prototipo CLINICA-MEDICA</h1>
            <p>Interfaz modular para avance de control de versiones y prototipo funcional.</p>
          </div>

          <div class="user-chip">
            <span class="avatar">A</span>
            Admin Clínica
          </div>
        </header>

        <router-outlet />
      </section>
    </main>
  `
})
export class AppShellComponent {}