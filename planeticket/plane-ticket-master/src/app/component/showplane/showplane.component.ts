import { Component, OnInit, ViewChild } from '@angular/core';
import {GetplaneService } from '../../service/getplane.service'
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { PlaneAr } from '../../plane.model'

import{ BuyseatComponent } from '../buyseat/buyseat.component'

@Component({
  selector: 'app-showplane',
  templateUrl: './showplane.component.html',
  styleUrls: ['./showplane.component.css']
})
export class ShowplaneComponent implements OnInit {

  @ViewChild(BuyseatComponent)
  buyseat:BuyseatComponent
  data : PlaneAr
  Tstatus : boolean = true
  Fstatus: boolean = false
  fnum:number
  constructor(private getPlaneService : GetplaneService,public local: LocalStorageService,private router: Router) { }

  ngOnInit(): void {
  }

  getPlane(){
    return this.getPlaneService.getAll(); 
  }
  usePlane(id:number){
    this.data = this.getPlaneService.getSome(id);
    alert('Work!!')
    this.Tstatus = false
    this.Fstatus = true
    this.fnum = id
  }
  recieveData($e){
    let num = $e;
    this.getPlaneService.flight[this.fnum].seat[num].status = true
    alert('Buy Complete On' +this.data.price +' Bath')
    this.Tstatus = true
    this.Fstatus = false
  }
}    
