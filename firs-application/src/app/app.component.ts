import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Arina application';
  isButtonPressed: boolean = false;


  showme() {
    this.isButtonPressed = !this.isButtonPressed;
    console.log('labas');
  }

}
