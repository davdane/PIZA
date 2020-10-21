import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  addAppoint(id, title, description, place, timeapp, profileId )
    {
     let data = [id, title, description, place, timeapp, profileId ];
     return this.database.executeSql('INSERT INTO appointment (id, title, description, place, timeapp, profileId ) VALUES (?, ?, ?, ?, ?, ?)', data)
    }

  addProfile(id, name, surname, age, height, weight)
    {
      let data = [id, name, surname, age, height, weight];
      return this.database.executeSql('INSERT INTO profile (id, name, surname, age, height, weight) VALUES (?, ?, ?, ?, ?, ?)', data)
    }




}
