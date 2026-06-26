import { Component } from '@angular/core';

@Component({
  selector: 'app-expediente',
  standalone: true,
  template: `
    <section class="page">
      <div class="section-head">
        <div>
          <h2>Expediente clínico</h2>
          <p>Notas de evolución, diagnósticos y receta digital.</p>
        </div>

        <button class="btn">Guardar consulta</button>
      </div>

      <div class="grid cols-2">
        <article class="card">
          <div class="profile-card">
            <div class="profile-photo">ML</div>

            <div>
              <h3>María López</h3>
              <p>Paciente PAC-0001 · 29 años</p>
              <span class="badge warning">Alergia: Penicilina</span>
            </div>
          </div>

          <p>
            <strong>Tipo de sangre:</strong>
            O+
          </p>

          <p>
            <strong>Última consulta:</strong>
            12/06/2026
          </p>

          <p>
            <strong>Constantes:</strong>
            120/80 mmHg · 36.8°C · 78 bpm
          </p>
        </article>

        <article class="card">
          <h3>Diagnóstico</h3>

          <div class="form-grid">
            <label class="field">
              <span>Código diagnóstico</span>
              <input class="input" placeholder="Ej. J02.9" />
            </label>

            <label class="field">
              <span>Descripción</span>
              <textarea
                class="textarea"
                rows="5"
                placeholder="Diagnóstico general de la consulta">
              </textarea>
            </label>
          </div>
        </article>
      </div>

      <div class="grid cols-2">
        <article class="card">
          <h3>Nota de evolución</h3>

          <textarea
            class="textarea"
            rows="9"
            placeholder="Registrar síntomas, evolución del paciente y observaciones médicas...">
          </textarea>
        </article>

        <article class="card">
          <h3>Receta digital</h3>

          <div class="form-grid">
            <label class="field">
              <span>Medicamento</span>
              <input class="input" placeholder="Paracetamol 500mg" />
            </label>

            <label class="field">
              <span>Indicaciones</span>
              <textarea
                class="textarea"
                rows="5"
                placeholder="Tomar cada 8 horas por 3 días">
              </textarea>
            </label>

            <button class="btn secondary">+ Agregar medicamento</button>
          </div>
        </article>
      </div>
    </section>
  `
})
export class ExpedienteComponent {}