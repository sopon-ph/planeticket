import { Component, OnInit } from '@angular/core';
import {GetplaneService } from '../../service/getplane.service'
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { PlaneAr } from '../../plane.model'

@Component({
  selector: 'app-showplane',
  templateUrl: './showplane.component.html',
  styleUrls: ['./showplane.component.css']
})
export class ShowplaneComponent implements OnInit {


  data : PlaneAr
  constructor(private getPlaneService : GetplaneService,public local: LocalStorageService,private router: Router) { }

  ngOnInit(): void {
  }

  getPlane(){
    return this.getPlaneService.getAll(); 
  }
  usePlane(id:number){
    this.data = this.getPlaneService.getSome(id);
    alert('Use flight '+this.data.id)
  }

} 
