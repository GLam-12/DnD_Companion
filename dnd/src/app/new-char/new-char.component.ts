import { Component, Inject, OnInit } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-char',
  templateUrl: './new-char.component.html',
  styleUrls: ['./new-char.component.scss']
})
export class NewCharComponent implements OnInit {
  public user:any=[];
  key: any;
  new_char: any;
  logged_in_user: any;

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private httpService: HttpService) { }

  ngOnInit() {
    this.logged_in_user = this.storage.get('Current User ID')
    this.new_char = {name: "", class: "", background: "", level: "", race: "", alignment: "", experience: "", strength: "", dexterity: "", constitution: "", intelligence: "", wisdom: "", charisma: "", ac: "", intiative: "", speed: "", health: "", weapon: "", armor: ""}
  }

  onSubmit() {
    this.httpService.add_char(this.logged_in_user, this.new_char)
    .subscribe(data => {
      console.log("character made: ", data)
      this.new_char = {name: "", class: "", background: "", level: "", race: "", alignment: "", experience: "", strength: "", dexterity: "", constitution: "", intelligence: "", wisdom: "", charisma: "", ac: "", intiative: "", speed: "", health: "", weapon: "", armor: ""}
    })
  }

}
