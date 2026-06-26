import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diagnosticos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page">
      <div class="section-head">
        <div>
          <h2>Diagnósticos médicos</h2>
          <p>
            Registro y consulta de diagnósticos asociados al expediente clínico del paciente.
          </p>
        </div>

        <button class="btn">+ Nuevo diagnóstico</button>
      </div>

      <div class="grid cols-2">
        <article class="card">
          <h3>Datos del paciente</h3>

          <div class="profile-card">
            <div class="profile-photo">ML</div>

            <div>
              <h3>María López</h3>
              <p>Paciente PAC-0001 · 29 años</p>
              <span class="badge warning">Alergia: Penicilina</span>
            </div>
          </div>

          <br />

          <p>
            <strong>Tipo de sangre:</strong>
            O+
          </p>

          <p>
            <strong>Última consulta:</strong>
            12/06/2026
          </p>

          <p>
            <strong>Médico asignado:</strong>
            Dra. Laura Pérez
          </p>
        </article>

        <article class="card">
          <h3>Registrar diagnóstico</h3>

          <div class="form-grid">
            <label class="field">
              <span>Código diagnóstico</span>
              <input class="input" placeholder="Ej. J02.9" />
            </label>

            <label class="field">
              <span>Nombre del diagnóstico</span>
              <input class="input" placeholder="Ej. Faringitis aguda" />
            </label>

            <label class="field">
              <span>Gravedad</span>
              <select class="select">
                <option>Leve</option>
                <option>Moderada</option>
                <option>Grave</option>
              </select>
            </label>

            <label class="field">
              <span>Estado</span>
              <select class="select">
                <option>Activo</option>
                <option>En observación</option>
                <option>Resuelto</option>
              </select>
            </label>

            <label class="field">
              <span>Observaciones médicas</span>
              <textarea
                class="textarea"
                rows="5"
                placeholder="Describir síntomas, evolución y recomendaciones médicas...">
              </textarea>
            </label>

            <button class="btn">Guardar diagnóstico</button>
          </div>
        </article>
      </div>

      <article class="card table-wrap">
        <div class="section-head">
          <div>
            <h3>Historial de diagnósticos</h3>
            <p>Diagnósticos registrados en el expediente clínico del paciente.</p>
          </div>

          <button class="btn ghost">Exportar resumen</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Código</th>
              <th>Diagnóstico</th>
              <th>Gravedad</th>
              <th>Estado</th>
              <th>Médico</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            <tr *ngFor="let item of diagnosticos">
              <td>{{ item.fecha }}</td>

              <td>
                <strong>{{ item.codigo }}</strong>
              </td>

              <td>
                <strong>{{ item.nombre }}</strong>
                <br />
                <span>{{ item.descripcion }}</span>
              </td>

              <td>
                <span
                  class="badge"
                  [class.success]="item.gravedad === 'Leve'"
                  [class.warning]="item.gravedad === 'Moderada'"
                  [class.danger]="item.gravedad === 'Grave'">
                  {{ item.gravedad }}
                </span>
              </td>

              <td>
                <span
                  class="badge"
                  [class.info]="item.estado === 'Activo'"
                  [class.warning]="item.estado === 'En observación'"
                  [class.success]="item.estado === 'Resuelto'">
                  {{ item.estado }}
                </span>
              </td>

              <td>{{ item.medico }}</td>

              <td class="actions">
                <button class="btn ghost">Ver</button>
                <button class="btn secondary">Editar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>
  `
})
export class DiagnosticosComponent {
  diagnosticos = [
    {
      fecha: '12/06/2026',
      codigo: 'J02.9',
      nombre: 'Faringitis aguda',
      descripcion: 'Dolor de garganta, fiebre leve e inflamación.',
      gravedad: 'Leve',
      estado: 'Resuelto',
      medico: 'Dra. Laura Pérez'
    },
    {
      fecha: '22/05/2026',
      codigo: 'I10',
      nombre: 'Hipertensión esencial',
      descripcion: 'Presión arterial elevada en control médico.',
      gravedad: 'Moderada',
      estado: 'En observación',
      medico: 'Dr. Luis Hernández'
    },
    {
      fecha: '03/04/2026',
      codigo: 'R51',
      nombre: 'Cefalea',
      descripcion: 'Dolor de cabeza frecuente asociado a estrés.',
      gravedad: 'Leve',
      estado: 'Activo',
      medico: 'Dra. Andrea Molina'
    }
  ];
}