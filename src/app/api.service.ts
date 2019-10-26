import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

public getNews(){
  console.log('get news');
    return this.httpClient.get(`http://85.235.67.239:5000/apiv1/parkingfind`);
  }
}