import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from "@angular/forms";
import { FormUtils } from '../../Utils/FormUtils';

@Component({
  selector: 'app-formulario-page',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './formulario-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioPage {
  
  formUtils=FormUtils; 

  isValidField(fieldName:string): boolean | null {
    return(
      this.myForm.controls[fieldName].errors &&
      this.myForm.controls[fieldName].touched
    );
}
getFieldError(fieldName: string):string | null{
  if (!this.myForm.controls[fieldName]) return null;
  const errors = this.myForm.controls[fieldName].errors ??{};
  for(const key of Object.keys(errors)){
    switch(key){
      case 'required':
        return 'Este campo es requerido';
      case 'minlegnth':
        return `Minimo de ${errors['minlegth'].requiredLength} caracteres.`;
      case 'min':
      return `Minimo de ${errors['min'].min}`;
      case 'email':
        return 'Formato de correo invalido';
        }
    }
    return null;
  }
  

onSubmit() {
if (this.myForm.invalid){
  this.myForm.markAllAsTouched();
  return;
}
console.log('Datos del formulario:', this.myForm.value);
alert('Formulario válido. Datos enviados correctamente.');
this.myForm.reset();
}

  private fb = inject(FormBuilder);

  myForm: FormGroup = this.fb.group({
    nombre: ['',[Validators.required, Validators.minLength(3)]],
    edad: [0,[Validators.required, Validators.min(18)]],
    correo:['',[Validators.required, Validators.email]],
  });
 }

