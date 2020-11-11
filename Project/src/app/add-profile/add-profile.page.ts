import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService, Profile } from '../servic/storage.service';
import { Platform } from "@ionic/angular";

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.page.html',
  styleUrls: ['./add-profile.page.scss'],
})
export class AddProfilePage implements OnInit {

  /*profiles : Array <string> = []*/

  profiles: Profile[]=[];
  newProfile: Profile=<Profile>{};


  constructor(private storageService: StorageService, private plt: Platform) {
    /*this.profiles=[]*/
    this.plt.ready().then(() => {
      this.loadProfiles();
    });
  }
  //CREATE
  addProfile() {
    this.newProfile.id = Date.now();

    this.storageService.addProfile(this.newProfile).then(item => {
      this.newProfile=<Profile>{};
      this.loadProfiles();
      alert("Profile added!")
    });
  }
  //READ
  loadProfiles(){
    this.storageService.getProfiles().then(items => {
      this.profiles=items;
    });
  }
  //UPDATE
  updateProfile(item: Profile) {
    item.name='${Profile.name}';

    this.storageService.updateProfile(item).then(items => {
      this.loadProfiles();
    });
  }
  //DELETE
  deleteProfile(item) {
    this.storageService.deleteProfile(item).then(items => {
      this.loadProfiles();
      alert("Profile deleted!");
    });
  }

  /*
  addProfile (){
    alert("Profile added!")
    this.profiles.push('')
  }*/
  ngOnInit() {
  }

}
