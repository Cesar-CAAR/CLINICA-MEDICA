import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-medico-dashboard',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page">
      <div class="grid cols-3">
        <article class="card kpi">
          <div>
            <span>Citas asignadas</span>
            <strong>16</strong>
          </div>
          <div class="kpi-icon">📅</div>
        </article>

        <article class="card kpi">
          <div>
            <span>Pacientes atendidos</span>
            <strong>9</strong>
          </div>
          <div class="kpi-icon">✅</div>
        </article>

        <article class="card kpi">
          <div>
            <span>Recetas emitidas</span>
            <strong>7</strong>
          </div>
          <div class="kpi-icon">💊</div>
        </article>
      </div>

      <div class="grid cols-2">
        <article class="card">
          <h3>Próxima consulta</h3>

          <div class="profile-card">
            <div class="profile-photo">ML</div>

            <div>
              <h3>María López</h3>
              <p>09:00 — Medicina general</p>
              <span class="badge warning">En espera</span>
            </div>
          </div>

          <p>Motivo: Dolor de garganta y fiebre.</p>

          <div class="actions">
            <a routerLink="/medico/expediente" class="btn">
              Abrir expediente
            </a>

            <a routerLink="/medico/agenda" class="btn secondary">
              Ver agenda
            </a>
          </div>
        </article>

        <article class="card">
          <h3>Acciones rápidas</h3>

          <div class="form-grid">
            <a routerLink="/medico/agenda" class="btn secondary">
              📅 Ver agenda del día
            </a>

            <a routerLink="/medico/expediente" class="btn secondary">
              📁 Registrar nota de evolución
            </a>

            <a routerLink="/medico/expediente" class="btn secondary">
              💊 Emitir receta digital
            </a>
          </div>
        </article>
      </div>
    </section>
  `
})
export class MedicoDashboardComponent {}