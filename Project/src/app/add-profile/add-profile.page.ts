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
      this.loadItems();
    });
  }
  //CREATE
  addItem() {
    this.newItem.id = Date.now();

    this.storageService.addItem(this.newItem).then(item => {
      this.newItem=<Item>{};
      this.loadItems();
      alert("Item added!")
    });
  }
  //READ
  loadItems(){
    this.storageService.getItems().then(items => {
      this.items=items;
    });
  }
  //UPDATE
  updateItem(item: Item) {
    item.name='${Item.name}';

    this.storageService.updateItem(item).then(items => {
      this.loadItems();
    });
  }
  //DELETE
  deleteItem(item: Item) {
    this.storageService.deleteItem(item.id).then(items => {
      this.loadItems();
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
