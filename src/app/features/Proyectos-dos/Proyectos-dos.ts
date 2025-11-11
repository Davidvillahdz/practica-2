import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProyectosServiceTs } from './services/proyectos-service';
import { ListadoProyecto } from '../Proyectos-page/components/listado-proyecto/listado-proyecto';
import { AddProyecto } from '../Proyectos-page/components/add-proyectos/add-proyectos';

@Component({
  selector: 'app-proyectos-dos-page',
  standalone: true,
  imports: [ListadoProyecto, AddProyecto],
  templateUrl: './Proyectos-dos.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectosDos {
  proyectosService = inject(ProyectosServiceTs);
}
