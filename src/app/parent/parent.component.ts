import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  /*ch="50";
  mess:string;

  onAfficher(event:any)
  {
    console.log(event);
  }

 */
message="message Parent";
  ngOnInit() {
  }
  constructor() { }
}
