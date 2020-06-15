import { Injectable } from '@angular/core';
import { PlaneOut } from '../plane.model'

@Injectable({
  providedIn: 'root'
})
export class GetplaneService {

  flight : PlaneOut = [
    {id:1,start:"กทม",finish:"เชียงใหม่",price:199},
    {id:2,start:"กทม",finish:"เชียงใหม่",price:199},
    {id:3,start:"กทม",finish:"เชียงใหม่",price:199},
    {id:4,start:"กทม",finish:"เชียงใหม่",price:199},
    {id:5,start:"กทม",finish:"เชียงใหม่",price:199},
  ]

  constructor() { }

  getAll(){
    return this.flight;
  }
}
