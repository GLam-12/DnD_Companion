import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user_login = {username: '', password: ''}
  login_error:string
  session:string

  public user:any=[];
  constructor(private _httpService: HttpService, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
    this.login_error = ''
  }

  login(){
    this._httpService.find_user(this.user_login)
    .subscribe(data =>{
      console.log("Here is the data from login", data)
      if(data.message_error){
        this.login_error = "Please enter a correct username and password"
      }
      else {
        console.log("We logged in")
        this.saveInLocal('Current User ID', data._id)
      }
    })
  }

  saveInLocal(key, val): void {
    console.log('recieved= key:' , key , val);
    this.storage.set(key, val);
    this.user[key]= this.storage.get(key);
  }

  logout(){
    localStorage.clear()
    console.log(this.storage.get('Current User ID'))
  }
}
