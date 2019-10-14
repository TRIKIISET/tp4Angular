import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
@Input() nom:string;
@Input() prenom:string;
@Input() salaire: number;
@Output() onChangerSalaire= new EventEmitter();

onConfirmer(sal:string)
{
 this.onChangerSalaire.emit(sal);
}
  constructor() { }

  ngOnInit() {
  }

}
