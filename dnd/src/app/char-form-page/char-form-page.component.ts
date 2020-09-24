import { Component, Inject, OnInit } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-char-form-page',
  templateUrl: './char-form-page.component.html',
  styleUrls: ['./char-form-page.component.scss']
})
export class CharFormPageComponent implements OnInit {
  logged_in_user:string
  
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private router: Router) { }

  ngOnInit() {
    this.logged_in_user = this.storage.get('Current User ID')
    if (!this.logged_in_user){
      this.router.navigate(['/'])
    }
  }

}
