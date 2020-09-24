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
  all_monsters(){
    return this._http.get('https://www.dnd5eapi.co/api/monsters')
  }
  all_spells(){
    return this._http.get('https://www.dnd5eapi.co/api/spells')
  }

  find_user(user_login){
    console.log("User_login at service", user_login)
    return this._http.post<{message_error: string, _id: string}>('/login', user_login)
  }
}
