import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl:string = 'http://localhost:8082';

  constructor(private http:HttpClient) { }

  generateToken(loginData:any){
   return this.http.post(`${this.baseUrl}/generate-token`,loginData);
  }

  public getUserDetails(data:any){
    return this.http.get(`${this.baseUrl}/examController/${data.userName}`);
    }

    // set token in localStorage

    loginUser(token:string){
      localStorage.setItem("token",token);
      return true;
    }
    
  getToken(){
    return localStorage.getItem("token");
  }

    isLoggedIn(){
    const token =  localStorage.getItem("token");
    return token ? true: false   
    }

    //logout: remove token from storage

    logOut(){
      localStorage.removeItem("token");
      localStorage.removeItem('user');
      return true;
    }

    public setUser(user:any){
      localStorage.setItem('user',JSON.stringify(user));
    }

    //getUser

    getUser(){
      const userDetail = localStorage.getItem("user");
      if(userDetail)
      {
        return JSON.stringify(userDetail);
      }
      this.logOut();
      return null;
    }
    
    //get current user which is logged in
    
    getCurrentUser(): Observable<any>{
      return this.http.get(`${this.baseUrl}/current-user`);
    }
  }

