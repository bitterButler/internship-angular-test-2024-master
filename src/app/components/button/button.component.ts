import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button', 
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label1 ="Let him cook!"; //if i dont give a value for the label in:  <app-button label="Click me">, then this "you clicked me" will be displayed.
  @Input() label2 = ""; //define an Input property on the UserComponent called name.
  @Input() label3 = "";

  greet() {
    alert("Trying to understand Angular. This is my first time :)");
  }

  @Output() CountingHandler = new EventEmitter<number>();
  click()
  {
    this.CountingHandler.emit();
  }

  //ha ujra aktivalom, akk szamolas mukodni fog.
  //counter = 0;
  //increase() {
  //  this.counter++;
  //}
  //
  //decrease() {
  //  if (this.counter > 0) {
  //    this.counter--;
  //    //console.log(this.counter); //only for checking in inspect-> console.
  //    if (this.counter === 0) { 
  //      alert("Counter is 0! Unable to decrease more.");
  //    }
  //  }
  //}
}