import { Component, Inject, OnInit } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
  }

  logout(){
    localStorage.clear()
    console.log(this.storage.get('Current User ID'))
  }
}
