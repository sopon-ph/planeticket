import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import {GetplaneService } from '../../service/getplane.service'

@Component({
  selector: 'app-buyseat',
  templateUrl: './buyseat.component.html',
  styleUrls: ['./buyseat.component.css']
})
export class BuyseatComponent implements OnInit {
  @Input() flight : any
  seatnum : number
  @Output() messege = new EventEmitter<number>();
  constructor(private cartService: CartService) { } 

  ngOnInit(): void {
  }
  getSeat(){
    return this.flight;
  }
  //checkSeat(i:number){
    //let seatStatus = this.flight.seat[i].status
 // }
  buyTicket(id: number){
    
    this.messege.emit(id);
    //this.cartService.add(id);
  }

}
