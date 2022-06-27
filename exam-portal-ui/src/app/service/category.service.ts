import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

   baseUrl= 'http://localhost:8082';
  

  constructor(private http: HttpClient) { }

  getAllCategory(){
    return this.http.get(`${this.baseUrl}/category/getAll`);
   }

   addCategory(category:any){
    return this.http.post(`${this.baseUrl}/category/add`,category);
   }


}
