import { Component, OnInit, Input } from '@angular/core';
import { Livre } from '../Livre';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {

  @Input() livre:Livre;
  onPlus()
  {
    this.livre.note ++;
  }
  onMoins()
  {
    this.livre.note --;
  }
  constructor() { }

  ngOnInit() {
  }

}
