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
    return this.httpc.get('https://bill.wonderfulmoss-e0d38d54.northeurope.azurecontainerapps.io/api/bills').
    toPromise();
    //https://jsonplaceholder.typicode.com/todos
  }

}