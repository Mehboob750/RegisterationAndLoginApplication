import { Injectable } from '@angular/core';
import {HttpService} from '../httpService/http.service'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpService) { }
  register(data){
   return this.http.post(data,"/userSignUp")
  }
  login(data){
    return this.http.post(data,"/login")
  }
  forget(data){
    return this.http.post(data,"/reset")
  }
  reset(data){
    return this.http. postAutharize(data,"/reset-password")
  }
}
