import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

export interface Profile{
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

addProfile(item: Profile): Promise<any>{
  return this.storage.get(PROFILES_KEY).then((items: Profile[]) => {
    if (items) {
      items.push(item);
      return this.storage.set(PROFILES_KEY, items);
    } else {
      return this.storage.set(PROFILES_KEY, [item])
    }
  });
}

getProfiles(): Promise<Profile[]>{
  return this.storage.get(PROFILES_KEY);
}

updateProfile(item: Profile): Promise<any>{
  return this.storage.get(PROFILES_KEY).then((items: Profile[]) => {
    if (!items || items.length===0) {
      return null;
    }
    let newProfiles: Profile[]= [];

    for (let i of items){
      if (i.id === item.id){
        newProfiles.push(item);
      } else {
        newProfiles.push(i);
      }
    }
    return this.storage.set(PROFILES_KEY, newProfiles);
  });
}

deleteProfile(id: number): Promise<Profile> {
  return this.storage.get(PROFILES_KEY).then((items: Profile[]) => {
    if (!items || items.length===0) {
      return null;
    }
    let toKeep: Profile[]= [];

    for (let i of items){
      if (i.id !== id){
        toKeep.push(i);
      }
    }
    return this.storage.set(PROFILES_KEY, toKeep);
  });
}
}
