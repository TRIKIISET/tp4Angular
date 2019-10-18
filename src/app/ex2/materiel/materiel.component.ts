import { Component, OnInit, Input } from '@angular/core';
import { Materiel } from '../Materiel';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
@Input() nom: string;
@Input() ref:string;
@Input() image:string;
@Input() prix:number;
@Input() repare: string;

@Input('mat') materiel: Materiel;

onReparer()
{
  if (this.repare=='endommagé')
    this.repare='réparé';
}
  constructor() { }

  onReparation()
  {
    if (this.materiel.repare=='endommagé')
    this.materiel.repare='réparé';
  }

  ngOnInit() {
  }

}
