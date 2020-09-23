import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  add_user(new_user){
    return this._http.post('/user', new_user)
  }  
  all_monsters(){
    return this._http.get('https://www.dnd5eapi.co/api/monsters')
  }
  all_spells(){
    return this._http.get('https://www.dnd5eapi.co/api/spells')
  }
}
