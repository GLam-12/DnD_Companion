import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: any
  logged_in_user:string

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private router: Router,private _httpService: HttpService) { }

  ngOnInit() {
    this.logged_in_user = this.storage.get('Current User ID')
    if (!this.logged_in_user){
      this.router.navigate(['/'])
    }
    this.show_characters();
  }

  show_characters() {
    this._httpService.show_characters()
    .subscribe(data => {
      console.log('here is all the characters: ', data)
      this.characters = data
    })
  }

}
