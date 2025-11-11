import { effect, Injectable, signal } from '@angular/core';
import { ProyectoInt } from '../../Proyectos-page/interfaces/Proyecto-int';

@Injectable({
  providedIn: 'root'
})
export class ProyectosServiceTs {
   constructor() {
    effect(()=>{
      const data = this.proyectos();
      console.log(data);
      console.log(JSON.stringify(data));
      localStorage.setItem(this.STORAGE_KEY,JSON.stringify(data));
    });

  }
   // proyectos= signal<ProyectoInt[]>([
 //   {id: 1, nombre: 'Proyecto 1', 
   // descripcion: 'Descripción del Proyecto 1'},
 // ]);
  private readonly STORAGE_KEY = 'proyectosApp';
 
 proyectos = signal<ProyectoInt[]>(this.loadProyectos());

 private loadProyectos() : ProyectoInt[]{
  const data = localStorage.getItem(this.STORAGE_KEY);
  return data ? JSON.parse(data):[{
  id: 1, nombre: 'Proyecto A', 
  descripcion: 'Descripción del Proyecto'
 },]
 }

  addProyecto(newProyecto: ProyectoInt) {
    this.proyectos.update((prev) => [...prev, newProyecto]);
  }
  deleteProyecto(){
    this.proyectos.set(this.proyectos().slice(1));
  }
}