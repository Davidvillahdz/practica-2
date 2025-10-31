import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-perfil-page',
  imports: [],
  templateUrl: './PerfilPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilPage {
  name = signal("Juan");
  lastName = signal("Alvarez");
  age = signal(22);

  getFullName() {
    return `${this.name()} ${this.lastName()}`;
  }
  changeData() {
    this.name.set("Pedro");
    this.lastName.set("Gomez");
    this.age.set(30);
  }
  resetData() {
    this.name.set("Juan");
    this.lastName.set("Alvarez");
    this.age.set(22);
  }
  changeAge() {
    this.age.update((current) => current + 1);
  }
  getFullNameUpperCase() {
    return this.getFullName().toUpperCase();
  }
}

