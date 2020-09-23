import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // socket: any
  constructor(private _http: HttpClient) { }

  add_user(new_user){
    return this._http.post('/user', new_user)
  }  

  setupsocket(){
    return io('http://Localhost:8000')
  }
}
