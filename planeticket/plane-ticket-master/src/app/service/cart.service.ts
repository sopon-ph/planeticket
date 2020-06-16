import { Injectable } from '@angular/core';
import { GetplaneService } from './getplane.service';
import { PlaneOut } from '../plane.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  counter: number = 0;
  sumPrice: number = 0;
  cart: PlaneOut = []

  constructor(private getplaneService:GetplaneService) { }

  add(id: number){
    console.log('Add product id: '+id+' to cart');
    this.cart.push(this.getplaneService.getSome(id));
    this.sumPrice += this.getplaneService.getSome(id).price
    this.counter = this.cart.length;
  }
  getCounter(){
    return this.counter;
  }
  getsumPrice(){
    return this.sumPrice;
  }
  getCart(){
    return this.cart;
  }
}
