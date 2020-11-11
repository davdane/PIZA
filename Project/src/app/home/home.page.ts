import { Component } from '@angular/core';
import { StorageService, Profile } from '../servic/storage.service';
import { Platform } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

items: Profile[]=[];
newItem: Profile=<Profile>{};

  constructor(private storageService: StorageService, private plt: Platform) {
    this.plt.ready().then(() => {
      this.loadProfiles();
    });
  }
  //READ
  loadProfiles(){
    this.storageService.getProfiles().then(items => {
      this.items=items;
    });
  }

}
