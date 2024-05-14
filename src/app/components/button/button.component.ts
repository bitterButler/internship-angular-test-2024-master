import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button', 
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label1 ="Let him cook!"; //if i dont give a value for the label in:  <app-button label="Click me">, then this "you clicked me" will be displayed.
  @Input() label2 = ""; //define an Input property on the ButtonComponent called label(buttontext).
  @Input() label3 = "";
  @Input() counter = 0; 

  greet() {
    alert("Trying to understand Angular. This is my first time :)");
  }

  @Output() increaseHandler = new EventEmitter<void>(); //define event handler for Increaser
  @Output() decreaseHandler = new EventEmitter<void>(); //define event handler for Decreaser
  
  increase() {
    this.increaseHandler.emit();
  }

  decrease() {
    this.decreaseHandler.emit();
  }
}