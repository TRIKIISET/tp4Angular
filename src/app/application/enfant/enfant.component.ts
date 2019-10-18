import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {


@Input()msg :string;
@Input('msgParent') msg2 :string;

nombre:number = 25; //Nombre à faire passer au parent
@Output() onChange= new EventEmitter<number>();
onEnvoyer()
{
  this.onChange.emit(this.nombre);
}
  constructor() {
    
   }

  ngOnInit() {
  }

}
