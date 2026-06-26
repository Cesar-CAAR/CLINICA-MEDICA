import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page">
      <div class="section-head">
        <div>
          <h2>Agenda de citas</h2>
          <p>Control de citas por especialidad, médico, horario y estado.</p>
        </div>

        <button class="btn">+ Agendar cita</button>
      </div>

      <div class="grid cols-4">
        <article class="card kpi">
          <div>
            <span>En espera</span>
            <strong>14</strong>
          </div>
         
        </article>

        <article class="card kpi">
          <div>
            <span>Completadas</span>
            <strong>22</strong>
          </div>
          
        </article>

        <article class="card kpi">
          <div>
            <span>Retrasadas</span>
            <strong>4</strong>
          </div>
         
        </article>

        <article class="card kpi">
          <div>
            <span>Canceladas</span>
            <strong>2</strong>
          </div>
          
        </article>
      </div>

      <article class="card">
        <h3>Registrar / reprogramar cita</h3>

        <div class="grid cols-4">
          <label class="field">
            <span>Paciente</span>
            <select class="select">
              <option>María López</option>
              <option>Carlos Ruiz</option>
            </select>
          </label>

          <label class="field">
            <span>Especialidad</span>
            <select class="select">
              <option>Medicina general</option>
              <option>Cardiología</option>
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
            <span>Fecha y hora</span>
            <input class="input" type="datetime-local" />
          </label>
        </div>
      </article>

      <article class="card table-wrap">
        <table>
          <thead>
            <tr>
              <th>Hora</th>
              <th>Paciente</th>
              <th>Médico</th>
              <th>Especialidad</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            <tr *ngFor="let item of appointments">
              <td>
                <strong>{{ item.time }}</strong>
              </td>

              <td>{{ item.patient }}</td>
              <td>{{ item.doctor }}</td>
              <td>{{ item.specialty }}</td>

              <td>
                <span
                  class="badge"
                  [class.success]="item.status === 'Completada'"
                  [class.warning]="item.status === 'En espera' || item.status === 'Retrasado'"
                  [class.danger]="item.status === 'Cancelada'">
                  {{ item.status }}
                </span>
              </td>

              <td class="actions">
                <button class="btn ghost">Cambiar estado</button>
                <button class="btn secondary">Reprogramar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>
  `
})
export class CitasComponent {
  appointments = [
    {
      time: '08:00',
      patient: 'María López',
      doctor: 'Dra. Laura Pérez',
      specialty: 'General',
      status: 'En espera'
    },
    {
      time: '08:15',
      patient: 'Carlos Ruiz',
      doctor: 'Dra. Laura Pérez',
      specialty: 'General',
      status: 'Completada'
    },
    {
      time: '09:00',
      patient: 'Ana Martínez',
      doctor: 'Dr. Luis Hernández',
      specialty: 'Cardiología',
      status: 'Retrasado'
    },
    {
      time: '10:30',
      patient: 'José Ramírez',
      doctor: 'Dra. Andrea Molina',
      specialty: 'Pediatría',
      status: 'Cancelada'
    }
  ];
}