import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medicos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page">
      <div class="section-head">
        <div>
          <h2>Médicos y consultorios</h2>
          <p>
            Registro de médicos, especialidades, cédula profesional
            y horarios.
          </p>
        </div>

        <button class="btn">+ Nuevo médico</button>
      </div>

      <div class="grid cols-3">
        <article class="card" *ngFor="let doctor of doctors">
          <div class="profile-card">
            <div class="profile-photo">
              {{ doctor.initials }}
            </div>

            <div>
              <h3>{{ doctor.name }}</h3>
              <p>{{ doctor.specialty }}</p>
              <span class="badge info">{{ doctor.office }}</span>
            </div>
          </div>

          <p>
            <strong>Cédula:</strong>
            {{ doctor.license }}
          </p>

          <p>
            <strong>Horario:</strong>
            {{ doctor.schedule }}
          </p>

          <div class="actions">
            <button class="btn secondary">Editar</button>
            <button class="btn ghost">Ver agenda</button>
          </div>
        </article>
      </div>

      <article class="card">
        <h3>Asignación rápida de consultorio</h3>

        <div class="grid cols-4">
          <label class="field">
            <span>Médico</span>
            <select class="select">
              <option>Dra. Laura Pérez</option>
              <option>Dr. Luis Hernández</option>
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
            <span>Consultorio</span>
            <select class="select">
              <option>Consultorio 1</option>
              <option>Consultorio 2</option>
            </select>
          </label>

          <label class="field">
            <span>Citas por hora</span>
            <input class="input" value="4" />
          </label>
        </div>
      </article>
    </section>
  `
})
export class MedicosComponent {
  doctors = [
    {
      initials: 'LP',
      name: 'Dra. Laura Pérez',
      specialty: 'Medicina general',
      office: 'Consultorio 1',
      license: 'CED-99881',
      schedule: 'Lun-Vie 08:00 - 14:00'
    },
    {
      initials: 'LH',
      name: 'Dr. Luis Hernández',
      specialty: 'Cardiología',
      office: 'Consultorio 2',
      license: 'CED-88771',
      schedule: 'Lun-Mie 09:00 - 15:00'
    },
    {
      initials: 'AM',
      name: 'Dra. Andrea Molina',
      specialty: 'Pediatría',
      office: 'Consultorio 3',
      license: 'CED-77661',
      schedule: 'Mar-Jue 10:00 - 16:00'
    }
  ];
}