import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { ProyectoInt } from '../../interfaces/Proyecto-int';

@Component({
  selector: 'add-proyecto',
  standalone: true, 
  imports: [],       
  templateUrl: './add-proyectos.html',
 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProyecto {
  // señales para los inputs
  name = signal('');
  description = signal('');

  // salida del componente
  newProyecto = output<ProyectoInt>();
  removeProyecto = output<number>();
  addProyecto() {
    const newProyecto: ProyectoInt = {
      id: Math.floor(Math.random() * 100),
      nombre: this.name(),
      descripcion: this.description()
    };

    this.newProyecto.emit(newProyecto);
    this.name.set('');
    this.description.set('');
  }

  changeName(value: string) {
    this.name.set(value);
  }

  changeDescription(value: string) {
    this.description.set(value);
  }
  deleteProyecto(id: number){
    this.removeProyecto.emit(1);
  }
}
