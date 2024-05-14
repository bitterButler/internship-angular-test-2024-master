import { Component } from '@angular/core';
import { ROUTES, RouterLink, RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component'; //important to have, else error.
import { SandboxComponent } from './pages/sandbox/sandbox.component';

@Component({
  selector: 'app-root', //Angular refering to the comp. in the template.
  standalone: true,
  imports: [ RouterOutlet, ButtonComponent, SandboxComponent, RouterLink ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  
}
