import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agenda-medico',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page">
      <div class="section-head">
        <div>
          <h2>Agenda del médico</h2>
          <p>Vista diaria para control de citas y cambio de estatus.</p>
        </div>

        <button class="btn ghost">Hoy</button>
      </div>

      <article class="card timeline">
        <div class="timeline-item" *ngFor="let item of agenda">
          <span class="time">{{ item.time }}</span>

          <div class="appointment">
            <div class="section-head">
              <div>
                <strong>{{ item.patient }}</strong>
                <p>{{ item.reason }}</p>
              </div>

              <span
                class="badge"
                [class.success]="item.status === 'Completada'"
                [class.warning]="item.status !== 'Completada'">
                {{ item.status }}
              </span>
            </div>

            <div class="actions">
              <button class="btn secondary">Iniciar consulta</button>
              <button class="btn ghost">Retrasar</button>
              <button class="btn ghost">Cancelar</button>
            </div>
          </div>
        </div>
      </article>
    </section>
  `
})
export class AgendaMedicoComponent {
  agenda = [
    {
      time: '08:00',
      patient: 'Carlos Ruiz',
      reason: 'Revisión general',
      status: 'Completada'
    },
    {
      time: '09:00',
      patient: 'María López',
      reason: 'Fiebre y dolor de garganta',
      status: 'En espera'
    },
    {
      time: '10:00',
      patient: 'Ana Martínez',
      reason: 'Control de presión',
      status: 'Retrasado'
    }
  ];
}