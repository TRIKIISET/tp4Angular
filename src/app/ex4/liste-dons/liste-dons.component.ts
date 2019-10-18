import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-dons',
  templateUrl: './liste-dons.component.html',
  styleUrls: ['./liste-dons.component.css']
})
export class ListeDonsComponent implements OnInit {

  total:number =0;
  donateurs=['Ahmed Mhiri', 'Sami Mrad', 'Olfa Ben Nasr'];
  onTotal(montant:number)
  {
    this.total += montant;
  }
  constructor() { }

  ngOnInit() {
  }

}
