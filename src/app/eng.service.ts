import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EngService {

  constructor(private http:HttpClient) { }
  url="http://jsonplaceholder.typicode.com/users"
  getData(){
    return this.http.get(this.url);
  }

}
