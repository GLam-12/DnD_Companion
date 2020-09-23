import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-camp-page',
  templateUrl: './camp-page.component.html',
  styleUrls: ['./camp-page.component.scss']
})
export class CampPageComponent implements OnInit {
  
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  
  }

}
