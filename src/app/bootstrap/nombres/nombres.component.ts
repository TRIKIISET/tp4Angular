import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nombres',
  templateUrl: './nombres.component.html',
  styleUrls: ['./nombres.component.css']
})
export class NombresComponent implements OnInit {

  tabNotes=[15,20,19,8,4,16.5];
  minimum:number;
  onMin()
  {
    let min = this.tabNotes[0];
    for (let t of this.tabNotes)
    {
      if (t < min)
      min = t;
    }
    this.minimum= min;
  }

  onPremier()
  {
    console.log (this.tabNotes[0]);
  }
  onDernier()
  {
    console.log (this.tabNotes[this.tabNotes.length-1]);
  }
  constructor() { }

  ngOnInit() {
  }

}
