import { Component } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  standalone: true,
  imports: [],
  templateUrl: './sandbox.component.html',
  styleUrl: './sandbox.component.scss',
})
export class SandboxComponent {

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
