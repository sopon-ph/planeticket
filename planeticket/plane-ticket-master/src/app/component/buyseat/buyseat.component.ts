import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlaneAr } from '../../plane.model'

@Component({
  selector: 'app-buyseat',
  templateUrl: './buyseat.component.html',
  styleUrls: ['./buyseat.component.css']
})
export class BuyseatComponent implements OnInit {
  @Input() flight : PlaneAr
  seatnum : number
  @Output() messege = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  getSeat(){
    return this.flight.seat;
  }
  checkSeat(i:number){
    let seatStatus = this.flight.seat[i].status
  }
  buyTicket(i){
    this.seatnum = i
    this.messege.emit(this.seatnum);
  }

}
