import { Component, OnInit, Input } from '@angular/core';
import {Materiel} from '../../ex2/Materiel';

@Component({
  selector: 'app-material-bootstrap',
  templateUrl: './material-bootstrap.component.html',
  styleUrls: ['./material-bootstrap.component.css']
})
export class MaterialBootstrapComponent implements OnInit {

 
  @Input('mat') materiel: Materiel;
  
   constructor() { }
  
    onReparation()
    {
      if (this.materiel.repare=='endommagé')
      this.materiel.repare='réparé';
    }

  ngOnInit() {
  }

}
