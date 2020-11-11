import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService, Item } from '../servic/storage.service';
import { Platform } from "@ionic/angular";

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.page.html',
  styleUrls: ['./add-profile.page.scss'],
})
export class AddProfilePage implements OnInit {

  /*profiles : Array <string> = []*/
  items: Item[]=[];

  newItem: Item=<Item>{};


  constructor(private storageService: StorageService, private plt: Platform) {
    /*this.profiles=[]*/
    this.plt.ready().then(() => {
      this.loadProfiles();
    });
  }
  //CREATE
  addProfile() {
    this.newItem.id = Date.now();

    this.storageService.addProfile(this.newItem).then(item => {
      this.newItem=<Item>{};
      this.loadProfiles();
      alert("Profile added!")
    });
  }
  //READ
  loadProfiles(){
    this.storageService.getProfiles().then(items => {
      this.items=items;
    });
  }
  //UPDATE
  updateProfile(item: Item) {
    item.name='${Profile.name}';

    this.storageService.updateProfile(item).then(items => {
      this.loadProfiles();
    });
  }
  //DELETE
  deleteProfile(item: Item) {
    this.storageService.deleteProfile(item.id).then(items => {
      this.loadProfiles();
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
