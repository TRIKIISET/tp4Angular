import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css']
})
export class NombreComponent implements OnInit {

  @Input() nb:number;
  @Input() pos:number;
  
  carre()
{
  return Math.pow(this.nb, 2);
}

  constructor() { }

  ngOnInit() {
  }

}
