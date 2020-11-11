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

const PROFILES_KEY = "my-profiles"

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

addProfile(item: Item): Promise<any>{
  return this.storage.get(PROFILES_KEY).then((items: Item[]) => {
    if (items) {
      items.push(item);
      return this.storage.set(PROFILES_KEY, items);
    } else {
      return this.storage.set(PROFILES_KEY, [item])
    }
  });
}

getProfiles(): Promise<any>{
  return this.storage.get(PROFILES_KEY);
}

updateProfile(item: Item): Promise<any>{
  return this.storage.get(PROFILES_KEY).then((items: Item[]) => {
    if (!items || items.length===0) {
      return null;
    }
    let newItem: Item[]= [];

    for (let i of items){
      if (i.id === Item.id){
        newItem.push(item);
      } else {
        newItem.push(i);
      }
    }
    return this.storage.set(PROFILES_KEY, newItem);
  });
}

deleteProfile(id: number): Promise<Item> {
  return this.storage.get(PROFILES_KEY).then((items: Item[]) => {
    if (!items || items.length===0) {
      return null;
    }
    let toKeep: Item[]= [];

    for (let i of items){
      if (i.id !== Item.id){
        toKeep.push(i);
      }
    }
    return this.storage.set(PROFILES_KEY, toKeep);
  });
}
}
