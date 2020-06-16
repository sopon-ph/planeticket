import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-buyseat',
  templateUrl: './buyseat.component.html',
  styleUrls: ['./buyseat.component.css']
})
export class BuyseatComponent implements OnInit {
  @Input() flight : any
  seatnum : number
  Seat:any;
  @Output() messege = new EventEmitter<number>();
  constructor(private cartService: CartService) { } 

  ngOnInit(): void {
  }
  getSeat(){
    return this.flight;
  }
  checkSeat(i:number){
    let seatStatus = this.flight.seat[i].status
  }
  buyTicket(id: number){
    this.seatnum = id
    //this.messege.emit(this.seatnum);
    //this.cartService.add(id);
  }

}
