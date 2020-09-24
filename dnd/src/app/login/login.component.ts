import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user_login = {username: '', password: ''}
  login_error:string
  session:string
  constructor(private _httpService: HttpService) { }

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
      }
    })
  }

}
