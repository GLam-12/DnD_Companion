import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-camp-page',
  templateUrl: './camp-page.component.html',
  styleUrls: ['./camp-page.component.scss']
})
export class CampPageComponent implements OnInit {
  logged_in_user:string
  campaign_id: any;

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.logged_in_user = this.storage.get('Current User ID')
    if (!this.logged_in_user){
      this.router.navigate(['/'])
    }
    this.route.params.subscribe((params: Params)=>{
      this.campaign_id = params["id"]
      console.log(this.campaign_id)
    }) 
  }

}
