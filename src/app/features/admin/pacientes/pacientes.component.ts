import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page">
      <div class="section-head">
        <div>
          <h2>Pacientes</h2>
          <p>
            Administración de expediente base, datos de contacto
            y alergias conocidas.
          </p>
        </div>

        <button class="btn">+ Nuevo paciente</button>
      </div>

      <div class="grid cols-2">
        <article class="card">
          <h3>Registrar paciente</h3>

          <div class="form-grid">
            <label class="field">
              <span>Nombre completo</span>
              <input class="input" placeholder="Ej. Ana Martínez" />
            </label>

            <label class="field">
              <span>Correo electrónico</span>
              <input class="input" placeholder="paciente@correo.com" />
            </label>

            <label class="field">
              <span>Teléfono</span>
              <input class="input" placeholder="644 000 0000" />
            </label>

            <label class="field">
              <span>Alergias conocidas</span>
              <textarea
                class="textarea"
                rows="3"
                placeholder="Ej. Penicilina, mariscos">
              </textarea>
            </label>

            <button class="btn">Guardar paciente</button>
          </div>
        </article>

        <article class="card">
          <h3>Resumen del módulo</h3>
          <p>
            Este módulo cubre el RF-03. Permite crear, consultar,
            actualizar y desactivar pacientes.
          </p>

          <div class="grid cols-2">
            <div class="empty-state">
              <strong>128</strong>
              <br />
              Pacientes activos
            </div>

            <div class="empty-state">
              <strong>12</strong>
              <br />
              Con alergias registradas
            </div>
          </div>
        </article>
      </div>

      <article class="card table-wrap">
        <table>
          <thead>
            <tr>
              <th>Paciente</th>
              <th>Contacto</th>
              <th>Alergias</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            <tr *ngFor="let patient of patients">
              <td>
                <strong>{{ patient.name }}</strong>
                <br />
                <span>{{ patient.code }}</span>
              </td>

              <td>
                {{ patient.phone }}
                <br />
                {{ patient.email }}
              </td>

              <td>{{ patient.allergies }}</td>

              <td>
                <span class="badge success">Activo</span>
              </td>

              <td class="actions">
                <button class="btn ghost">Editar</button>
                <button class="btn secondary">Expediente</button>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>
  `
})
export class PacientesComponent {
  patients = [
    {
      name: 'María López',
      code: 'PAC-0001',
      phone: '644 123 4567',
      email: 'maria@correo.com',
      allergies: 'Penicilina'
    },
    {
      name: 'Carlos Ruiz',
      code: 'PAC-0002',
      phone: '644 789 1122',
      email: 'carlos@correo.com',
      allergies: 'Sin alergias'
    },
    {
      name: 'Ana Martínez',
      code: 'PAC-0003',
      phone: '644 555 8899',
      email: 'ana@correo.com',
      allergies: 'Mariscos'
    }
  ];
}