import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-monsters-list',
  templateUrl: './monsters-list.component.html',
  styleUrls: ['./monsters-list.component.scss']
})
export class MonstersListComponent implements OnInit {
  monsters: any
  all_monsters: any
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.show_monsters()
    this.created_monsters()
  }

  show_monsters(){
    this._httpService.all_monsters()
    .subscribe(data => {
      console.log('got monsters', data)
      this.monsters = data
    })
  }

  created_monsters(){
    this._httpService.show_monsters()
    .subscribe(data => {
      console.log('created monsters here', data)
      this.all_monsters = data
    })
  }
}
