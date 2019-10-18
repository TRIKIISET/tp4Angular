import { Component, OnInit } from '@angular/core';
import {Livre} from '../Livre';

@Component({
  selector: 'app-livre-view',
  templateUrl: './livre-view.component.html',
  styleUrls: ['./livre-view.component.css']
})
export class LivreViewComponent implements OnInit {

 titre:string;
 auteur:string;
 prix:number = 0;
 note:number =0;
 tabLivres =new Array();

 onAjouter()
 {
   let l = new Livre(this.titre, this.auteur, this.prix, this.note);
   this.tabLivres.push(l);
 }

  constructor() { }

  ngOnInit() {
  }

}
