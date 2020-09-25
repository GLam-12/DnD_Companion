import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  new_user = {}
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    console.log('*****')
    this._httpService.setupsocket()
  }

  add_user() {
    this._httpService.add_user(this.new_user)
    .subscribe(data => {
      console.log("Here is the new user", data)
      this.router.navigate(['/player_page'])
    })
  } 

  clear_form(){
    this.new_user = {}
  }
}
