import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './PerfilPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilPage {
  name = signal('Juan');
  lastName = signal('Alvarez');
  age = signal(22);

  getFullName() {
    return `${this.name()} ${this.lastName()}`;
  }

  getFullNameUpperCase() {
    return this.getFullName().toUpperCase();
  }

  changeData() {
    this.name.set('Pedro');
    this.lastName.set('Gomez');
    this.age.set(30);
  }

  changeAge() {
    this.age.update(current => current + 1);
  }

  resetData() {
    this.name.set('Juan');
    this.lastName.set('Alvarez');
    this.age.set(22);
  }
}
