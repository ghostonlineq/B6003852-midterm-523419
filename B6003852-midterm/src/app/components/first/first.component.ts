import { Component, OnInit } from '@angular/core';

interface user_profile{
  studentid: string,
  name: string,
  gender: string,
  birthyear: number,
  email: string,
  phone: string,
  img: string,
  address: string,
  comment: string
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  profile: user_profile

  constructor() {
    this.profile = {
      studentid: '',
      name: '',
      gender: '',
      birthyear: 0,
      email: '',
      phone: '',
      img: 'https://api.adorable.io/avatars/285/abott@adorable.io.png',
      address: 'SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand',
      comment: ''
    }
  }

  ngOnInit(): void {
    this.profile.studentid = "B6003852";
    this.profile.name = "Krekpon Dokkamklang";
    this.profile.gender= "Male";
    this.profile.birthyear = 1998;
    this.profile.email = "layfon2002@gmail.com";
    this.profile.phone= "093-0949139";
  }
  getAddress(){
    alert(this.profile.address);
  }
  getComment(){
    return this.profile.comment;
  }

}
