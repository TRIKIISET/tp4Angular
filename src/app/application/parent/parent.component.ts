import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

message="message Parent";
valeur:number; // qui va récupérer le nombre venant de l'enfant
onAfficher(event:number) 
{
  this.valeur = event;
}
  ngOnInit() {
  }
  constructor() { }
}
