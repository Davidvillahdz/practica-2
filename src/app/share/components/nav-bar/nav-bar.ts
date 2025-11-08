import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.html',
  styles: [`
    nav {
      background-color: #159;
      padding: 1rem;
    }
    a {
      color: white;
      margin-right: 1rem;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    .active {
      font-weight: bold;
      text-decoration: underline;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBar { }
