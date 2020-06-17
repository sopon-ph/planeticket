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
  price :number
  s_id:number
  seatnum : number
  promo:any
  code:string
  usePro:boolean = true
  @Output() messege = new EventEmitter<number>();
  constructor(private cartService: CartService,private getPlaneService : GetplaneService) { } 

  ngOnInit(): void {
  }
  getSeat(){
    return this.flight;
  } 
  //checkSeat(i:number){
    //let seatStatus = this.flight.seat[i].status
 // }
  buyTicket(id: number){
    this.price = this.flight[id].price
    this.s_id=id
    //this.messege.emit(id);
    //this.cartService.add(id);
  }
  buy(){
    alert('Buy Ticket no '+this.flight[this.s_id].no+' price '+this.price)
    this.messege.emit(this.s_id);
  }
  ckeckPro(){
    
    try {
      this.getPlaneService.checkPro(this.code).subscribe (
          data => {
            if(this.usePro){
              this.promo = data;
              console.log(this.promo)
              this.price = this.price - this.promo[0].discount
              alert('คุณได้รับส่วนลด '+this.promo[0].discount+' บาท')
              this.usePro = false
            }else{
              alert('คุณได้ใช้ Promotion ไปแล้ว')
            }
          },
          err => {
              console.log(err)
          });
             
    }catch (error) {
          console.log(error)
    }

    
  }

}
