import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-char-info',
  templateUrl: './char-info.component.html',
  styleUrls: ['./char-info.component.scss']
})
export class CharInfoComponent implements OnInit {
  spells: any
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.show_spells()
  }

  show_spells(){
    this._httpService.all_spells()
    .subscribe(data => {
      console.log('got spells', data)
      this.spells = data
    })
  }
}
