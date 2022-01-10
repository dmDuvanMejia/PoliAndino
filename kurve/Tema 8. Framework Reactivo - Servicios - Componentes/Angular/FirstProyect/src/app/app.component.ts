import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirstProyect';

  constructor() {
    let res = this.suma(10, 213);
    console.log(res);
  }

  public suma( num1: number, num2: number ): number {
    return num1 + num2;
  }
}
