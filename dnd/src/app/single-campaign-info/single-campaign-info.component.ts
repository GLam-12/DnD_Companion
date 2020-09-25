import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-single-campaign-info',
  templateUrl: './single-campaign-info.component.html',
  styleUrls: ['./single-campaign-info.component.scss']
})
export class SingleCampaignInfoComponent implements OnInit {
  campaign_id: any;
  campaign: any;

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private router: Router, private route: ActivatedRoute, private _httpService: HttpService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
      this.campaign_id = params["id"]
      console.log("this is the campaign id", this.campaign_id)
    }) 
    this.get_campaign();
  }
  get_campaign(){
    this._httpService.get_campaign(this.campaign_id)
    .subscribe(data => {
      console.log('Here is the single campaign!', data)
      this.campaign = data
    })
  }
}
