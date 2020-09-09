import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
   private http: HttpClient
  ) { }

  private domain = 'https://jsonplaceholder.typicode.com/';
  public get(url: string) {
    return this.http.get(`${this.domain}${url}`); 
  }
}
