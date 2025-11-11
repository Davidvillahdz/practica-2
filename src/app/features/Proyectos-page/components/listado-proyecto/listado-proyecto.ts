import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProyectoInt } from '../../interfaces/Proyecto-int';

@Component({
  selector: 'listado-proyecto',
  imports: [],
  templateUrl: './listado-proyecto.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListadoProyecto { 
listName = input.required<string>();
proyectos = input.required<ProyectoInt[]>();
}