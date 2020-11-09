import { Component } from '@angular/core';
import { StorageService, Item } from '../servic/storage.service';
import { Platform } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

items: Item[]=[];
newItem: Item=<Item>{};

  constructor(private storageService: StorageService, private plt: Platform) {
    this.plt.ready().then(() => {
      this.loadItems();
    });
  }
  //READ
  loadItems(){
    this.storageService.getItems().then(items => {
      this.items=items;
    });
  }

}
