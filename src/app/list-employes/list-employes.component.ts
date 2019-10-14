import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-employes',
  templateUrl: './list-employes.component.html',
  styleUrls: ['./list-employes.component.css']
})
export class ListEmployesComponent implements OnInit {
employes =[
  {nom:'Mabrouk', prenom:'Ahmed', salaire:0},
  {nom:'Marai', prenom:'Manel', salaire:0},
  {nom:'Amara', prenom:'Fares', salaire:0}
];

recupSalaire(sal:number, i:number)
{
  console.log(sal+ " i= "+i);
this.employes[i].salaire = sal;
}

  constructor() { }

  ngOnInit() {
  }

}
