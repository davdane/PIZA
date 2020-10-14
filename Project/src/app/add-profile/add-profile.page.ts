import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.page.html',
  styleUrls: ['./add-profile.page.scss'],
})
export class AddProfilePage implements OnInit {

  profiles : Array <string> = []

  constructor() {
    this.profiles=[]
  }

  ngOnInit() {
  }
  addProfile (){
    alert("Profile added!")
    this.profiles.push('')
  }
}
