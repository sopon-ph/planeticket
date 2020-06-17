import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
const urls = 'http://localhost:3000/flight/seat';
//const urlst = 'http://localhost:3000/flight/seat/status';
@Injectable({
  providedIn: 'root'
})
export class GetplaneService {
  
  flight : any;
  seat:any;
  constructor(private http: HttpClient) { }

  getFlight(){
    return this.http.get<any>('http://localhost:3000/flight/get')
    .pipe(map(data => {
        if (data) {
            this.flight = data;
            console.log(this.flight);
        }
            return this.flight;
        }));
    }

  getAll(){
    return this.flight;
  }
  getSome(id:string){
    console.log('setsome')
    return this.http.get(`${urls}/${id}`).pipe(map(data => {
      if (data) {
          this.seat = data;
          console.log(this.seat);
      }
          return this.seat;
      }));
  }
  buySeat(s_id:number){
    alert('id '+s_id)
    let ssid = {
      s_id:s_id
    }
    return this.http.put(`${urls}`,ssid)
   
  }
}
