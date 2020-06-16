import { Injectable } from '@angular/core';
import { PlaneOut } from '../plane.model'

@Injectable({
  providedIn: 'root'
})
export class GetplaneService {

  flight : PlaneOut = [
    {id:1,start:"กทม",finish:"เชียงใหม่",price:1999,seat:[
      {no:1,status:false},{no:2,status:false},{no:3,status:true},
      {no:4,status:false},{no:5,status:false},{no:6,status:true}]},
    {id:2,start:"กทม",finish:"เชียงใหม่",price:1999,seat:[
      {no:1,status:true},{no:2,status:false},{no:3,status:false},
      {no:4,status:false},{no:5,status:false},{no:6,status:false}]},
    {id:3,start:"กทม",finish:"เชียงใหม่",price:1999,seat:[
      {no:1,status:false},{no:2,status:true},{no:3,status:false},
      {no:4,status:false},{no:5,status:false},{no:6,status:false}]},
    {id:4,start:"กทม",finish:"เชียงใหม่",price:1999,seat:[
      {no:1,status:false},{no:2,status:true},{no:3,status:false},
      {no:4,status:false},{no:5,status:false},{no:6,status:false}]},
    {id:5,start:"กทม",finish:"เชียงใหม่",price:1999,seat:[
      {no:1,status:false},{no:2,status:false},{no:3,status:false},
      {no:4,status:false},{no:5,status:true},{no:6,status:false}]},
  ]

  constructor() { }

  getAll(){
    return this.flight;
  }
  getSome(id:number){
    return this.flight[id];
  }
}
