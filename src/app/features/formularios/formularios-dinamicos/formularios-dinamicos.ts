import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators, FormArray, FormControl } from "@angular/forms";
import { FormUtils } from '../../../Utils/FormUtils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formularios-dinamicos',
  standalone: true,  
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formularios-dinamicos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormulariosDinamicos {
  

  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  newLenguaje: FormControl = this.fb.control('', [
    Validators.required,
    Validators.minLength(3)
  ]);


  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],

    lenguajes: this.fb.array([
      this.fb.control('Python', [Validators.required, Validators.minLength(3)]),
      this.fb.control('Java', [Validators.required, Validators.minLength(3)]),
    ])
  });


  get lenguajes(): FormArray {
    return this.myForm.get('lenguajes') as FormArray;
  }

  
  onAddToLenguajes() {
    if (this.newLenguaje.invalid) {
      this.newLenguaje.markAsTouched();
      return;
    }

    this.lenguajes.push(
      this.fb.control(this.newLenguaje.value, [
        Validators.required,
        Validators.minLength(3)
      ])
    );

    this.newLenguaje.reset();
  }

  // Eliminar lenguaje
onDeleteLenguaje(index: number) {
  this.lenguajes.removeAt(index);
}

  constructor() {
  this.loadFormData();
}
loadFormData() {
  const savedData = localStorage.getItem('formularioDinamico');

  if (!savedData) return;

  const data = JSON.parse(savedData);

  // Cargar name
  this.myForm.get('name')?.setValue(data.name);

  // Limpiar lenguajes actuales
  this.lenguajes.clear();

  // Volver a cargar lenguajes desde storage
  data.lenguajes.forEach((leng: string) => {
    this.lenguajes.push(
      this.fb.control(leng, [Validators.required, Validators.minLength(3)])
    );
  });
}


  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
     localStorage.setItem('formularioDinamico', JSON.stringify(this.myForm.value));

    console.log("Formulario enviado:", this.myForm.value);

    alert('Datos guardados correctamente');
  }
}