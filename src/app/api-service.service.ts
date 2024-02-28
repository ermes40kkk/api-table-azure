import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {
   private headers = new HttpHeaders({'Content-Type': 'application/json'});
   private httpc!: HttpClient;
  constructor(private http: HttpClient) {
    this.httpc = http;

   }

  getData() : Promise<any>{
    return this.httpc.get('https://azureapi-a4mu.onrender.com/api/bills').
    toPromise();
    //https://jsonplaceholder.typicode.com/todos
  }

}