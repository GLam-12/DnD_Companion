import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../http.service'
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monster-form',
  templateUrl: './monster-form.component.html',
  styleUrls: ['./monster-form.component.scss']
})
export class MonsterFormComponent implements OnInit {
  monster: any
  public user:any=[];
  key: any;
  logged_in_user: any

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.monster = {name: '', ac: '', health: '', description: ''}
    this.logged_in_user = this.storage.get('Current User ID')
  }

  onSubmit(){
    this._httpService.add_monster(this.logged_in_user, this.monster)
    .subscribe(data => {
      console.log('monster is made', data)
      this.router.navigate(['/dungeon_master'])
      this.monster = {name: '', ac: '', health: '', description: ''}
    })
  }

}
