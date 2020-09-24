import { Component, OnInit, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.scss']
})
export class CampaignFormComponent implements OnInit {
  public user:any=[];
  key: any;

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
    console.log(this.storage)
    console.log(this.storage.get('Current User ID'))
    
  }
  getFromLocal(key): void {
    console.log('recieved= key:' + key);
    this.user= this.storage.get(key);
    console.log(this.user);
  }

}
