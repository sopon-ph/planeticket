import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

const baseUrl = 'http://localhost:3000/api/register';
const baseUrLogin = 'http://localhost:3000/api/register/login';
@Injectable({
  providedIn: 'root'
})
export class SingupService {
  pro:any
  constructor(private http: HttpClient) { }
 
  getAll() {
    return this.http.get(baseUrl);
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByUser(username, password) {
    console.log(username+", "+password);
    return this.http.get(`${baseUrl}/${username}/${password}`);
  }
  getUser(user:string){
    const url = 'http://localhost:3000/api/register/user/get/'+user;
    return this.http.get(`${url}`).pipe(map(data => {
      if (data) {
          this.pro = data
          console.log(data);
      }
          return this.pro;
      }));
  }
}

