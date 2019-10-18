import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materiel-list',
  templateUrl: './materiel-list.component.html',
  styleUrls: ['./materiel-list.component.css']
})
export class MaterielListComponent implements OnInit {

  materiels = [
    {nom:'Scanner', reference: 'e7f8', image: '../assets/scanner.jpg', prix: 253.45, repare:'réparé'},
    {nom:'Ecran', reference: 'ec18', image: '../assets/ecrans.png', prix: 403.5, repare:'endommagé'},
    {nom:'Imprimante', reference: 'imp88', image: '../assets/imprimantes.jpg', prix: 189.5, repare:'endommagé'},
    {nom:'Pc Portable', reference: 'hp58', image: '../assets/pcPortables.png', prix: 1512.8, repare:'réparé'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
