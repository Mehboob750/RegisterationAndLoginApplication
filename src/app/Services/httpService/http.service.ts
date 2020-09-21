import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl=environment.baseUrl
  private options = { headers: new HttpHeaders().set('Authorization', 'HBx8xvTLD5Sohy9E8YbK2fPCgIzM2IeNBNsmvsqZ8K5XWDCgMlvjlkOlrKc2KzF0') };
  constructor(private httpClient: HttpClient) { }
  post(data,url){
    return this.httpClient.post(this.baseUrl+url,data)
  }

  postAutharize(data,url){
    return this.httpClient.post(this.baseUrl+url,data,this.options)
  }
}
