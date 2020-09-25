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
  add_char(id, new_char) {
    return this._http.post(`newchar/${id}`, new_char)
  }
  find_user(user_login){
    console.log("User_login at service", user_login)
    return this._http.post<{message_error: string, _id: string}>('/login', user_login)
  }
  add_campaign(id, campaign) {
    console.log('inside the http service', campaign)
    return this._http.post(`/new_campaign/${id}`, campaign)
  }
  add_monster(id, monster) {
    console.log('inside the http service', monster)
    return this._http.post(`/new_monster/${id}`, monster)
  }
  show_campaigns(){
    return this._http.get('/show_campaigns')
  }
  show_monsters(){
    return this._http.get('/show_monsters')
  }
  show_characters() {
    return this._http.get('/show_characters')
  }
}
