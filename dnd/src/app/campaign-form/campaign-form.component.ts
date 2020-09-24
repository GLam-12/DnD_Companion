import { HttpService } from '../http.service'
import { Component, OnInit, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.scss']
})
export class CampaignFormComponent implements OnInit {
  campaign: any
  public user:any=[];
  key: any;
  logged_in_user: any
  
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private _httpService: HttpService) { }

  ngOnInit() {
    this.campaign = {name: '', player_count: 3, description: '', dm: ''}
    this.logged_in_user = this.storage.get('Current User ID')
  }

  // getFromLocal(key): void {
  //   console.log('recieved= key:' + key);
  //   this.user= this.storage.get(key);
  //   console.log(this.user);
  // }

  onSubmit(){
    this._httpService.add_campaign(this.logged_in_user, this.campaign)
    .subscribe(data => {
      console.log('campaign is made', data)
      this.campaign = {name: '', player_count: 3, description: '', dm: ''}
    })
  }
}
