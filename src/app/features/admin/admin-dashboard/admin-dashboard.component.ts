import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page">
      <div class="grid cols-4">
        <article class="card kpi">
          <div>
            <span>Pacientes activos</span>
            <strong>128</strong>
          </div>
          
        </article>

        <article class="card kpi">
          <div>
            <span>Médicos registrados</span>
            <strong>18</strong>
          </div>
          
        </article>

        <article class="card kpi">
          <div>
            <span>Citas de hoy</span>
            <strong>42</strong>
          </div>
          
        </article>

        <article class="card kpi">
          <div>
            <span>Consultorios</span>
            <strong>8</strong>
          </div>
          
        </article>
      </div>

      <div class="grid cols-3">
        <article class="card module-card">
          <div>
            
            <h3>Gestión de pacientes</h3>
            <p>
              Alta, baja, edición y consulta de datos personales,
              alergias y tutor legal.
            </p>
          </div>
          <a routerLink="/admin/pacientes" class="btn secondary">
            Abrir módulo
          </a>
        </article>

        <article class="card module-card">
          <div>
            <div class="icon"></div>
            <h3>Gestión de médicos</h3>
            <p>
              Registro de médicos, especialidades, consultorios
              y horarios de atención.
            </p>
          </div>
          <a routerLink="/admin/medicos" class="btn secondary">
            Abrir módulo
          </a>
        </article>

        <article class="card module-card">
          <div>
            
            <h3>Agenda de citas</h3>
            <p>
              Control de disponibilidad, citas por hora y estado de atención.
            </p>
          </div>
          <a routerLink="/admin/citas" class="btn secondary">
            Abrir módulo
          </a>
        </article>
      </div>

      <article class="card">
        <div class="section-head">
          <h3>Actividad reciente</h3>
          <button class="btn ghost">Ver reporte</button>
        </div>

        <div class="timeline">
          <div class="timeline-item">
            <span class="time">08:30</span>
            <div class="appointment">
              <strong>Paciente registrado:</strong>
              María López — Alergia a penicilina.
            </div>
          </div>

          <div class="timeline-item">
            <span class="time">09:00</span>
            <div class="appointment">
              <strong>Cita agendada:</strong>
              Cardiología con Dr. Hernández.
            </div>
          </div>

          <div class="timeline-item">
            <span class="time">10:15</span>
            <div class="appointment">
              <strong>Receta emitida:</strong>
              Consulta general completada.
            </div>
          </div>
        </div>
      </article>
    </section>
  `
})
export class AdminDashboardComponent {}