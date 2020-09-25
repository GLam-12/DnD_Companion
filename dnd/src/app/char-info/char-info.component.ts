import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-char-info',
  templateUrl: './char-info.component.html',
  styleUrls: ['./char-info.component.scss']
})
export class CharInfoComponent implements OnInit {

  spells: any
  logged_in_user: string;
  character_id: any;
  character: any;


  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private router: Router, private route: ActivatedRoute, private _httpService: HttpService) { }

  ngOnInit() {
    this.show_spells()
    this.logged_in_user = this.storage.get('Current User ID')
    if (!this.logged_in_user){
      this.router.navigate(['/'])
    }
    this.route.params.subscribe((params: Params)=>{
      this.character_id = params["id"]
    }) 
    this.one_character();
  }

  show_spells(){
    this._httpService.all_spells()
    .subscribe(data => {
      console.log('got spells', data)
      this.spells = data
    })
  }

  one_character() {
    this._httpService.get_character(this.character_id)
    .subscribe(data => {
      console.log("this is char: ", data)
      this.character = data
    })
  }

  onSubmit() {
    this._httpService.edit_character(this.character_id, this.character)
    .subscribe(data => {
      console.log('edited character: ', data)
    })
  }

}
