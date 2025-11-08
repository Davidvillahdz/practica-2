import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{ ProyectoInt } from './interfaces/Proyecto-int';

@Component({
  selector: 'app-proyectos-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './Proyectos-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectosPage {
  // señales para los inputs
  name = signal('');
  descripcion = signal('');

  // lista inicial de proyectos
  proyectos = signal<ProyectoInt[]>([
    {
      id: 1,
      nombre: 'Proyecto A',
      descripcion: 'Descripcion'
    }
  ]);

  // función para agregar proyectos
  agregarProyecto() {
    const nombre = this.name().trim();
    const descripcion = this.descripcion().trim();

    if (!nombre || !descripcion) return; // evita campos vacíos

    const nuevoProyecto: ProyectoInt = {
      id: this.proyectos().length + 1,
      nombre,
      descripcion
    };

    // agrega el nuevo proyecto al array
    this.proyectos.update(lista => [...lista, nuevoProyecto]);

    // limpia los inputs
    this.name.set('');
    this.descripcion.set('');
  }
}
