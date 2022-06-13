import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  oddNumber:number[] = [];
  evenNumber:number[] = [];

  onIntervalFired(lastNumber:number) {
    if ( lastNumber % 2 == 0) {
      this.evenNumber.push(lastNumber);
    } else {
      this.oddNumber.push(lastNumber);
    }
    
  }
}
