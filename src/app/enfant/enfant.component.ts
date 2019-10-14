import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {
/*
 @Input('dana') val:string;
 @Output() onChange = new EventEmitter();
 buttonClick()
 {
   this.onChange.emit('bonjour');
 }
*/
@Input()msg :string;
@Input('msgParent') msg2 :string;
  constructor() {
    
   }

  ngOnInit() {
  }

}
