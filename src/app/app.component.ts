import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component'; //important to have, else error.
import { SandboxComponent } from './pages/sandbox/sandbox.component';

@Component({
  selector: 'app-root', //Angular refering to the comp. in the template.
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, SandboxComponent, RouterLink], //describe dependencies. To see my btn, i need to import ButtonComponent 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'internship-angular-test-2024';
  
  //counter logic-ot átraktam ide, de így nincs számolás
  counter = 0;
  increase() {
    this.counter++;
  }
  
  decrease() {
    if (this.counter > 0) {
      this.counter--;
      //console.log(this.counter); //only for checking in inspect-> console.
      if (this.counter === 0) { 
        alert("Counter is 0! Unable to decrease more.");
      }
    }
  }
}
