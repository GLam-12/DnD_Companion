import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.scss']
})
export class CampaignFormComponent implements OnInit {
  campaign: any
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.campaign = {name: '', player_count: 3, description: '', dm: ''}
  }

  onSubmit(){
    this._httpService.add_campaign(this.campaign)
    .subscribe(data => {
      console.log('campaign is made', data)
    })
  }
}
