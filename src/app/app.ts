import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './share/components/nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('01_fundamentos');
}
