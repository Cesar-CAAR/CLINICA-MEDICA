import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historial-paciente',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page">
      <div class="section-head">
        <div>
          <h2>Historial clínico resumido</h2>
          <p>
            Vista de paciente con recetas, diagnósticos generales,
            vacunas y constantes vitales.
          </p>
        </div>

        <button class="btn ghost">Descargar resumen</button>
      </div>

      <div class="grid cols-3">
        <article class="card kpi">
          <div>
            <span>Recetas previas</span>
            <strong>6</strong>
          </div>
          
        </article>

        <article class="card kpi">
          <div>
            <span>Diagnósticos</span>
            <strong>4</strong>
          </div>
          
        </article>

        <article class="card kpi">
          <div>
            <span>Vacunas</span>
            <strong>9</strong>
          </div>
          
        </article>
      </div>

      <div class="grid cols-2">
        <article class="card">
          <h3>Recetas anteriores</h3>

          <div class="timeline">
            <div class="appointment" *ngFor="let receta of recetas">
              <strong>{{ receta.date }}</strong>
              <p>{{ receta.medicine }}</p>
              <span class="badge info">{{ receta.doctor }}</span>
            </div>
          </div>
        </article>

        <article class="card">
          <h3>Kardex de salud</h3>

          <p>
            <strong>Tipo de sangre:</strong>
            O+
          </p>

          <p>
            <strong>Presión arterial:</strong>
            120/80 mmHg
          </p>

          <p>
            <strong>Temperatura:</strong>
            36.8°C
          </p>

          <p>
            <strong>Frecuencia cardiaca:</strong>
            78 bpm
          </p>

          <p>
            <strong>Vacunas:</strong>
            Influenza, COVID-19, Tétanos
          </p>
        </article>
      </div>
    </section>
  `
})
export class HistorialPacienteComponent {
  recetas = [
    {
      date: '12/06/2026',
      medicine: 'Paracetamol 500mg cada 8 horas por 3 días.',
      doctor: 'Dra. Laura Pérez'
    },
    {
      date: '22/05/2026',
      medicine: 'Loratadina 10mg cada 24 horas por 5 días.',
      doctor: 'Dr. Luis Hernández'
    },
    {
      date: '03/04/2026',
      medicine: 'Suero oral y reposo.',
      doctor: 'Dra. Andrea Molina'
    }
  ];
}