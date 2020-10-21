import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  addAppoint(idapp, title, description, place, timeapp, profileId )
    {
     let data = [idappp, title, description, place, timeapp, profileId ];
     return this.database.executeSql('INSERT INTO appointment (idapp, title, description, place, timeapp, profileId ) VALUES (?, ?, ?, ?, ?, ?)', data)
    }

  addProfile(profileId, name, surname, age, height, weight)
    {
      let data = [profileId, name, surname, age, height, weight];
      return this.database.executeSql('INSERT INTO profile (profileId, name, surname, age, height, weight) VALUES (?, ?, ?, ?, ?, ?)', data)
    }

  selectAppoint(id,profileId)
    {
      return this.database.executeSql('SELECT title FROM appointment,profile  WHERE idapp=?, profileId=?', [idapp,profileId])
      let title = [];
    }



}
