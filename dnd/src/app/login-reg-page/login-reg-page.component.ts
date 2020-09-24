import { Component, OnInit, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-login-reg-page',
  templateUrl: './login-reg-page.component.html',
  styleUrls: ['./login-reg-page.component.scss']
})
export class LoginRegPageComponent implements OnInit {

  public data:any=[];



  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
  
}





getFromLocal(key): void {
    console.log('recieved= key:' + key);
    this.data[key]= this.storage.get(key);
    console.log(this.data);
  }

  ngOnInit() {
  }

}
