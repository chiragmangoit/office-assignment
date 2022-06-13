import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-contor',
  templateUrl: './game-contor.component.html',
  styleUrls: ['./game-contor.component.css']
})
export class GameContorComponent implements OnInit {
  
  @Output() intervalFired = new EventEmitter<number>();
  
  interval;
  lastNumber = 0;


  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit( this.lastNumber + 1 )
      this.lastNumber++;
    },1000);
  }

  onEndGame() {
    clearInterval(this.interval);
  }

}
