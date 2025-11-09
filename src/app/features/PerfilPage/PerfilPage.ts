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
  name = signal('David');
  lastName = signal('Villa');
  age = signal(20);

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
    this.name.set('David');
    this.lastName.set('Villa');
    this.age.set(20);
  }
}
