import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  template: `
    <section class="auth-page">
      <div class="auth-hero">
        <div>
          <div class="brand-badge">🏥 CLINICA-MEDICA</div>

          <h1>Atención médica conectada y segura</h1>

          <p>
            Sistema web para administrar pacientes, médicos, citas,
            expedientes clínicos y recetas digitales.
          </p>
        </div>

        <div class="auth-stats">
          <div class="auth-stat">
            <strong>500+</strong>
            <span>usuarios simultáneos</span>
          </div>

          <div class="auth-stat">
            <strong>99.5%</strong>
            <span>disponibilidad objetivo</span>
          </div>

          <div class="auth-stat">
            <strong>4</strong>
            <span>citas por hora/médico</span>
          </div>
        </div>
      </div>

      <div class="auth-card-wrap">
        <form class="auth-card">
          <h2>Iniciar sesión</h2>

          <p>Ingresa con tu correo o cédula profesional.</p>

          <div class="form-grid">
            <label class="field">
              <span>Correo o cédula profesional</span>
              <input class="input" placeholder="usuario@clinica.com" />
            </label>

            <label class="field">
              <span>Contraseña</span>
              <input class="input" type="password" placeholder="••••••••" />
            </label>

            <label class="field">
              <span>Rol de prueba</span>
              <select class="select">
                <option>Administrador</option>
                <option>Médico</option>
                <option>Paciente</option>
              </select>
            </label>

            <div class="helper-row">
              <label>
                <input type="checkbox" />
                Recordarme
              </label>

              <span>Acceso seguro</span>
            </div>

            <a routerLink="/admin/dashboard" class="btn">
              Entrar al sistema →
            </a>

            <a routerLink="/paciente/dashboard" class="btn secondary">
              Entrar como paciente
            </a>
          </div>
        </form>
      </div>
    </section>
  `
})
export class LoginComponent {}