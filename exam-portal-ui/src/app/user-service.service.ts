import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url='http://localhost:8082/examController/saveUser';
  constructor(private http: HttpClient) { }

  public addUser(user: any){
    return this.http.post(this.url,user);
  }
}
