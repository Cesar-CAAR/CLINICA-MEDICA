import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-paciente-dashboard',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page">
      <div class="grid cols-2">
        <article class="card">
          <div class="profile-card">
            <div class="profile-photo">AR</div>

            <div>
              <h3>Bienvenida, Ana Rodríguez</h3>
              <p>Portal del paciente</p>
              <span class="badge success">Expediente activo</span>
            </div>
          </div>

          <p>
            Desde aquí puedes consultar tus citas, historial médico resumido
            y recetas anteriores.
          </p>
        </article>

        <article class="card">
          <h3>Próxima cita</h3>

          <p>
            <strong>Especialidad:</strong>
            Medicina general
          </p>

          <p>
            <strong>Médico:</strong>
            Dra. Laura Pérez
          </p>

          <p>
            <strong>Fecha:</strong>
            26/06/2026 · 09:00 AM
          </p>

          <span class="badge warning">En espera</span>
        </article>
      </div>

      <article class="card">
        <h3>Agendar cita en línea</h3>

        <div class="grid cols-4">
          <label class="field">
            <span>Especialidad</span>
            <select class="select">
              <option>Medicina general</option>
              <option>Cardiología</option>
              <option>Pediatría</option>
            </select>
          </label>

          <label class="field">
            <span>Médico</span>
            <select class="select">
              <option>Dra. Laura Pérez</option>
              <option>Dr. Luis Hernández</option>
            </select>
          </label>

          <label class="field">
            <span>Día disponible</span>
            <input class="input" type="date" />
          </label>

          <label class="field">
            <span>Hora</span>
            <select class="select">
              <option>08:00</option>
              <option>08:15</option>
              <option>08:30</option>
              <option>08:45</option>
            </select>
          </label>
        </div>

        <br />

        <button class="btn">Confirmar cita</button>
      </article>

      <div class="grid cols-3">
        <article class="card module-card">
          <div>
            <div class="icon">📅</div>
            <h3>Mis citas</h3>
            <p>Consulta o reprograma tus citas médicas.</p>
          </div>

          <button class="btn secondary">Ver citas</button>
        </article>

        <article class="card module-card">
          <div>
            <div class="icon">📁</div>
            <h3>Historial</h3>
            <p>Consulta diagnósticos generales y vacunas registradas.</p>
          </div>

          <a routerLink="/paciente/historial" class="btn secondary">
            Ver historial
          </a>
        </article>

        <article class="card module-card">
          <div>
            <div class="icon">💊</div>
            <h3>Recetas</h3>
            <p>Revisa las recetas emitidas por tus médicos.</p>
          </div>

          <a routerLink="/paciente/historial" class="btn secondary">
            Ver recetas
          </a>
        </article>
      </div>
    </section>
  `
})
export class PacienteDashboardComponent {}