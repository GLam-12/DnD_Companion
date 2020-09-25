import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-dm-page',
  templateUrl: './dm-page.component.html',
  styleUrls: ['./dm-page.component.scss']
})
export class DmPageComponent implements OnInit {
  campaigns: any;
  logged_in_user:string;
  
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private router: Router,private _httpService: HttpService) { }

  ngOnInit() {
    this.logged_in_user = this.storage.get('Current User ID')
    if (!this.logged_in_user){
      this.router.navigate(['/'])
    }
    this.show_campaigns()
  }
  show_campaigns(){
    this._httpService.show_campaigns()
    .subscribe(data => {
      console.log('here is all the campaigns', data)
      this.campaigns = data
    })
  }

}