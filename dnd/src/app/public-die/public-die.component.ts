import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-public-die',
  templateUrl: './public-die.component.html',
  styleUrls: ['./public-die.component.scss']
})
export class PublicDieComponent implements OnInit {
  socket:any
  rand_int:number
  roll_20:number
  roll_6:number
  roll_4: number
  roll_12: number
  roll_10:number
  roll_8:number

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.socket = this._httpService.setupsocket()
    this.socket.on('welcome', (data) => {
      console.log(data)
    })
    this.socket.on('roll_20 to share', (data)=>{
      this.roll_20 = data
      console.log('roll_20 recieved from server', this.roll_20)
    })
    this.socket.on('roll_6 to share', (data)=> {
      this.roll_6 = data
      console.log('roll_6 received from server', this.roll_6)
    })
    this.socket.on('roll_4 to share', (data)=>{
      this.roll_4 = data
      console.log('roll_4 received from server', this.roll_4)
    })
    this.socket.on('roll_12 to share', (data)=>{
      this.roll_12 = data
      console.log('roll_12 received from server', this.roll_4)
    })
    this.socket.on('roll_10 to share', (data)=>{
      this.roll_10 = data
      console.log('roll_10 received from server', this.roll_4)
    })
    this.socket.on('roll_8 to share', (data)=>{
      this.roll_8 = data
      console.log('roll_8 received from server', this.roll_4)
    })
  }

  roll_dice_20(){
    this.rand_int = Math.trunc(Math.random() * 20 + 1)
    console.log("20 sided rand int is", this.rand_int)
    this.socket.emit('roll_20', this.rand_int)
  }

  roll_dice_6(){
    this.rand_int = Math.trunc(Math.random() * 6 + 1)
    console.log("6 sided rand is", this.rand_int)
    this.socket.emit('roll_6', this.rand_int)
  }

  roll_dice_4(){
    this.rand_int = Math.trunc(Math.random() * 4 + 1)
    console.log("4 sided rand int is", this.rand_int)
    this.socket.emit('roll_4', this.rand_int)
  }

  roll_dice_12(){
    this.rand_int = Math.trunc(Math.random() * 12 + 1)
    console.log("12 sided rand int is", this.rand_int)
    this.socket.emit('roll_12', this.rand_int)
  }
  
  roll_dice_10(){
    this.rand_int = Math.trunc(Math.random() * 10 + 1)
    console.log("10 sided rand int is", this.rand_int)
    this.socket.emit('roll_10', this.rand_int)
  }

  roll_dice_8(){
    this.rand_int = Math.trunc(Math.random() * 8 + 1)
    console.log("8 sided rand int is", this.rand_int)
    this.socket.emit('roll_8', this.rand_int)
  }
}
