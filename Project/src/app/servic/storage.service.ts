import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

export interface Item{
  id: number,
  name: string,
  surname: string,
  age: number,
  height: number,
  weight: number
}

const ITEMS_KEY = "my-profiles"

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

addItem(item: Item): Promise<any>{
  return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
    if (items) {
      items.push(item);
      return this.storage.set(ITEMS_KEY, items);
    } else {
      return this.storage.set(ITEMS_KEY, [item])
    }
  });
}

getItems(): Promise<any>{
  return this.storage.get(ITEMS_KEY);
}

updateItem(item: Item): Promise<any>{
  return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
    if (!items || items.length===0) {
      return null;
    }
    let newItem: Item[]= [];

    for (let i of items){
      if (i.id === item.id){
        newItem.push(item);
      } else {
        newItem.push(i);
      }
    }
    return this.storage.set(ITEMS_KEY, newItem);
  });
}

deleteItem(id: number): Promise<Item> {
  return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
    if (!items || items.length===0) {
      return null;
    }
    let toKeep: Item[]= [];

    for (let i of items){
      if (i.id !== item.id){
        toKeep.push(i);
      }
    }
    return this.storage.set(ITEMS_KEY, toKeep);
  });
}
}
