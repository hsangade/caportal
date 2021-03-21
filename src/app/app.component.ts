import { Component } from '@angular/core';
declare const check:any;
declare const select:any;
declare const premium:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'caportal';

  onClick() {
    check();
    select();
    premium();
  }

}
