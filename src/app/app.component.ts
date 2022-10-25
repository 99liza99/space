import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  option1: string | undefined;
  option2: string | undefined;
  option3: string | undefined;

  constructor() {
  }

  search() {
    console.log(this.option1, this.option2, this.option3);
  }
}
