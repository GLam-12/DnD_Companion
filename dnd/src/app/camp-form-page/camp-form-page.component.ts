import { Component, Inject, OnInit } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camp-form-page',
  templateUrl: './camp-form-page.component.html',
  styleUrls: ['./camp-form-page.component.scss']
})
export class CampFormPageComponent implements OnInit {
  logged_in_user:string
  constructor(private _httpService: HttpService, @Inject(LOCAL_STORAGE) private storage: WebStorageService, private router: Router) { }

  ngOnInit() {
    this.logged_in_user = this.storage.get('Current User ID')
    if (!this.logged_in_user){
      this.router.navigate(['/'])
    }
  }

}
