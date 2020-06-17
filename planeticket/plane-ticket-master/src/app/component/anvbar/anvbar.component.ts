import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';
import { CartService } from 'src/app/service/cart.service';
import { GetplaneService } from 'src/app/service/getplane.service';
import { PlaneOut } from 'src/app/plane.model';

@Component({
  selector: 'app-anvbar',
  templateUrl: './anvbar.component.html',
  styleUrls: ['./anvbar.component.css']
})
export class AnvbarComponent implements OnInit {
  sts:number = 1;
  alldata: any;
  term: string;
  token: string;

  cart: PlaneOut =[]

  constructor(private router: Router, public local: LocalStorageService,private cartService: CartService) {
    this.cart =this.cartService.getCart();
   }

  ngOnInit(): void {
  } 
  Logout(){
    this.local.remove('customer');
    this.router.navigate(['/login']);
  }
  getUsername(){
    let user = this.local.get('customer').result.username;
    return user;
  }
  getCounter(){
    return this.cartService.getCounter();
  }
  
  getSumPrice(){
    return this.cartService.getsumPrice();
  }
}
