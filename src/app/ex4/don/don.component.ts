import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-don',
  templateUrl: './don.component.html',
  styleUrls: ['./don.component.css']
})
export class DonComponent implements OnInit {

  montant:number =0;
  @Input() nom:string;
  @Output() onChangeMoney = new EventEmitter<number>();
  onDonner()
  {
    this.onChangeMoney.emit(this.montant);
  }
  constructor() { }

  ngOnInit() {
  }

}
